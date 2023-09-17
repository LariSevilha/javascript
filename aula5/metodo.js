class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade; 
    }
    
    mostrarNome(){
     return this.nome
    }
}

const pessoa = new Pessoa('lari', 19);
console.log(pessoa.mostrarNome())