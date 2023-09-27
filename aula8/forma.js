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
module.exports = Forma;
