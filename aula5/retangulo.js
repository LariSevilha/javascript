class Retangulo {
    constructor(altura,largura){
     this.altura = altura;
     this.largura = largura;
    }
    
    calcularArea(){
      return this.altura * this.largura
    }
    
 }
  
 const retangulo = new Retangulo(20, 20)
 console.log(retangulo.calcularArea());