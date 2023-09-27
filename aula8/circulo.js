const Forma = require("./forma")

class Circulo extends Forma {
    constructor(raio){
        super();
        this.raio = raio
    }

    calcularArea(){
        return Math.PI * (Math.pow(this.raio, 2))
    }
}
module.exports = Circulo;
