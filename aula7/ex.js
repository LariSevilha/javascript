class Ingresso {
    constructor(valor) {
      this.valor = valor;
    }
  
    imprimeValor() {
      console.log(`Valor do Ingresso: R$ ${this.valor.toFixed(2)}`);
    }
  }
  
  class Vip extends Ingresso {
    constructor(valor, valorAdicional) {
      super(valor);
      this.valorAdicional = valorAdicional;
    }
    calculaValor() {
        return this.valor + this.valorAdicional;
      }
    
    imprimeValor() {
      super.imprimeValor(); 
      console.log(`Valor do Ingresso VIP: R$ ${this.calculaValor().toFixed(2)}`);
    }

  class Normal extends Ingresso {
    constructor(valor) {
      super(valor);
    }
  
    imprimeTipo() {
      console.log("Ingresso Normal");
    }
  }
  
  class CamaroteInferior extends Vip {
    constructor(valor, valorAdicional, localizacao) {
      super(valor, valorAdicional);
      this.localizacao = localizacao;
    }
  
    imprimeValor() {
      super.imprimeValor(); 
      console.log(`Localização do Ingresso VIP no Camarote Inferior: ${this.localizacao}`);
    }
  }
  
  class CamaroteSuperior extends Vip {
    constructor(valor, valorAdicional) {
      super(valor, valorAdicional);
    }
  
    imprimeValor() {
      super.imprimeValor(); 
      console.log(`Valor do Ingresso VIP no Camarote Superior: R$ ${this.calculaValor().toFixed(2)}`);
    }
  }
  
  const ingressoNormal = new Normal(50);
  ingressoNormal.imprimeValor();
  ingressoNormal.imprimeTipo();
  
  const ingressoVip = new Vip(100, 30);
  ingressoVip.imprimeValor();
  
  const camaroteInferior = new CamaroteInferior(120, 40, "Setor A");
  camaroteInferior.imprimeValor();
  
  const camaroteSuperior = new CamaroteSuperior(150, 50);
  camaroteSuperior.imprimeValor();
  

  class Normal extends Ingresso {
    constructor(valor) {
      super(valor);
    }
  
    imprimeTipo() {
      console.log("Ingresso Normal");
    }
  }
  
  class CamaroteInferior extends Vip {
    constructor(valor, valorAdicional, localizacao) {
      super(valor, valorAdicional);
      this.localizacao = localizacao;
    }
  
    imprimeValor() {
      super.imprimeValor(); 
      console.log(`Localização do Ingresso VIP no Camarote Inferior: ${this.localizacao}`);
    }
  }
  
  class CamaroteSuperior extends Vip {
    constructor(valor, valorAdicional) {
      super(valor, valorAdicional);
    }
  
    imprimeValor() {
      super.imprimeValor(); 
      console.log(`Valor do Ingresso VIP no Camarote Superior: R$ ${this.calculaValor().toFixed(2)}`);
    }
  }
  
  const ingressoNormal = new Normal(50);
  ingressoNormal.imprimeValor();
  ingressoNormal.imprimeTipo();
  
  const ingressoVip = new Vip(100, 30);
  ingressoVip.imprimeValor();
  
  const camaroteInferior = new CamaroteInferior(120, 40, "Setor A");
  camaroteInferior.imprimeValor();
  
  const camaroteSuperior = new CamaroteSuperior(150, 50);
  camaroteSuperior.imprimeValor();
  