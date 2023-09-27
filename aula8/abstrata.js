class Forma {
    constructor(){
       if(this.constructor === Forma){
        throw new Error("Essa classe não pode ser instanciada")
       } 
    }
    calcularArea(){
        console.log("Esse metódo deve se implementado")
    }
}

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

class Circulo extends Forma {
    constructor(raio){
        super();
        this.raio = raio
    }

    calcularArea(){
        return Math.PI * (Math.pow(this.raio, 2))
    }
}

const retangulo = new Retangulo(10, 20);
console.log(retangulo.calcularArea())

const circulo = new Circulo(10);
console.log(circulo.calcularArea())