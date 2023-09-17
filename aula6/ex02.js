const readline = require('readline');

class JogoAdivinhacao {
    constructor() {
        this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        this.tentativas = 0;
        this.jogoEncerrado = false;
    }

    fazerTentativa(palpite) {
        if (this.jogoEncerrado) {
            console.log("O jogo está encerrado. Inicie um novo jogo.");
            return;
        }

        this.tentativas++;

        if (palpite === this.numeroAleatorio) {
            console.log(`Parabéns! Você acertou em ${this.tentativas} tentativas.`);
            this.jogoEncerrado = true;
        } else if (palpite < this.numeroAleatorio) {
            console.log("Seu palpite está muito baixo. Tente novamente.");
        } else {
            console.log("Seu palpite está muito alto. Tente novamente.");
        }
    }

    encerrarJogo() {
        this.jogoEncerrado = true;
        console.log("O jogo foi encerrado. O número era: " + this.numeroAleatorio);
    }
}

const jogo = new JogoAdivinhacao();

console.log("Bem-vindo ao Jogo de Adivinhação!");
console.log("Tente adivinhar o número entre 1 e 100.");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function realizarJogada() {
    if (!jogo.jogoEncerrado) {
        rl.question("Insira seu palpite: ", (palpite) => {
            const palpiteNumero = parseInt(palpite);
            jogo.fazerTentativa(palpiteNumero);
            realizarJogada(); 
        });
    } else {
        rl.close();
    }
}

realizarJogada();
