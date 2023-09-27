const Forma = require("./forma")

class Retangulo extends Forma {
    constructor(altura, largura){
        super();
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(){
        return this.largura * this.altura
    }
}

module.exports = Retangulo;