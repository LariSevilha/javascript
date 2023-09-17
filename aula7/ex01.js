class Ingresso {
  #valor;

  constructor(valor) {
      this.#valor = valor;
  }

  getValor() {
      return this.#valor;
  }

  imprimeValor() {
      console.log(`Valor do Ingresso: R$${this.getValor().toFixed(2)}`);
  }
}

class VIP extends Ingresso {
  #adicional;

  constructor(valor, adicional) {
      super(valor);
      this.#adicional = adicional;
  }

  calculaValor() {
      return this.getValor() + this.#adicional;
  }

  imprimeValorVIP() {
      console.log(`Valor do Ingresso VIP: R$${this.calculaValor().toFixed(2)}`);
  }
}

class Normal extends Ingresso {
  imprimeTipo() {
      console.log("Ingresso Normal");
  }
}

class CamaroteInferior extends VIP {
  #localizacao;

  constructor(valor, adicional, localizacao) {
      super(valor, adicional);
      this.#localizacao = localizacao;
  }

  getLocalizacao() {
      return this.#localizacao;
  }

  imprimeLocalizacao() {
      console.log(`Localização do Ingresso: ${this.getLocalizacao()}`);
  }
}

class CamaroteSuperior extends VIP {
  valorCamaroteSuperior() {
      return this.calculaValor();
  }
}
 
const ingressoNormal = new Normal(50.00);
const ingressoVIP = new VIP(100.00, 20.00);
const camaroteInferior = new CamaroteInferior(80.00, 30.00, "Setor A");
const camaroteSuperior = new CamaroteSuperior(120.00, 40.00);

ingressoNormal.imprimeValor();
ingressoVIP.imprimeValor();
ingressoVIP.imprimeValorVIP();
camaroteInferior.imprimeValorVIP();
camaroteInferior.imprimeLocalizacao();
camaroteSuperior.imprimeValorVIP();
