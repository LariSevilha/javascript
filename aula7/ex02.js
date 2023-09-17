class ContaBancaria {
  #saldo = 0;
  #numeroDaConta;

  constructor(numeroDaConta) {
    this.#numeroDaConta = numeroDaConta;
  }

  get saldo() {
    return this.#saldo;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Valor do depósito deve ser maior que zero.");
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    } else {
      console.log("Saldo insuficiente ou valor inválido para saque.");
    }
  }
}

class ContaCorrente extends ContaBancaria {
  #taxaDeManutencao;
  #chequeEspecial;

  constructor(numeroDaConta, taxaDeManutencao, chequeEspecial) {
    super(numeroDaConta);
    this.#taxaDeManutencao = taxaDeManutencao;
    this.#chequeEspecial = chequeEspecial;
  }

  aplicarTaxaDeManutencao() {
    this.sacar(this.#taxaDeManutencao);
  }
}

class ContaPoupanca extends ContaBancaria {
  #taxaDeJuros;

  constructor(numeroDaConta, taxaDeJuros) {
    super(numeroDaConta);
    this.#taxaDeJuros = taxaDeJuros;
  }

  aplicarJuros() {
    const juros = this.saldo * (this.#taxaDeJuros / 100);
    this.depositar(juros);
  }
}

const contaCorrente = new ContaCorrente(123, 10, 100.00);
const contaPoupanca = new ContaPoupanca(456, 2.5);

contaCorrente.depositar(1000);
contaCorrente.aplicarTaxaDeManutencao();

contaPoupanca.depositar(500);
contaPoupanca.aplicarJuros();

console.log("Saldo da Conta Corrente:", contaCorrente.saldo.toFixed(2));
console.log("Saldo da Conta Poupança:", contaPoupanca.saldo.toFixed(2));
