const readline = require('readline');

class ContaBancaria {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.opcao = 0;
        this.saldo = 0;

        this.menu();
        this.escolherOpcao();
    }

    menu() {
        console.log("Escolha uma opção:");
        console.log("1 - Depósito");
        console.log("2 - Saque");
        console.log("3 - Transferência");
        console.log("4 - Saldo");
        console.log("0 - Sair");
    }

    realizarDeposito() {
        this.rl.question("Digite o valor do depósito: ", (valor) => {
            const deposito = parseFloat(valor);
            this.saldo += deposito;
            this.menu();
            this.escolherOpcao();
        });
    }

    realizarSaque() {
        this.rl.question("Digite o valor do saque: ", (valor) => {
            const saque = parseFloat(valor);
            if (saque <= this.saldo) {
                this.saldo -= saque;
            } else {
                console.log("Saldo insuficiente");
            }
            this.menu();
            this.escolherOpcao();
        });
    }

    realizarTransferencia() {
        this.rl.question("Digite o valor da transferência: ", (valor) => {
            const transferencia = parseFloat(valor);
            if (transferencia <= this.saldo) {
                this.rl.question("Digite o número da conta de destino: ", (contaDestino) => {
                    console.log("Transferência realizada com sucesso");
                    this.saldo -= transferencia;
                    this.menu();
                    this.escolherOpcao();
                });
            } else {
                console.log("Saldo insuficiente");
                this.menu();
                this.escolherOpcao();
            }
        });
    }

    consultarSaldo() {
        console.log("Saldo: " + this.saldo);
        this.menu();
        this.escolherOpcao();
    }

    escolherOpcao() {
        this.rl.question("Escolha uma opção: ", (op) => {
            this.opcao = parseInt(op);
            switch (this.opcao) {
                case 1:
                    this.realizarDeposito();
                    break;
                case 2:
                    this.realizarSaque();
                    break;
                case 3:
                    this.realizarTransferencia();
                    break;
                case 4:
                    this.consultarSaldo();
                    break;
                case 0:
                    console.log("Saindo...");
                    this.rl.close();
                    break;
                default:
                    console.log("Opção inválida");
                    this.menu();
                    this.escolherOpcao();
            }
        });
    }
}

new ContaBancaria();
