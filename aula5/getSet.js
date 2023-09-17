class Retangulo {
   set altura(altura){
       this._altura = altura
   }
   
   set largura(largura){
    this._largura = largura
    }
    
    get area(){
        return calcularArea();
    }
    
    calcularArea(){
        return this._altura * this._largura
      }
 }
  
 const retangulo = new Retangulo()
 retangulo.altura = 20;
 retangulo.largura = 20;
 console.log(retangulo.area());