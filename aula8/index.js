const Retangulo = require("./retangulo")
const Circulo = require("./circulo")

const retangulo = new Retangulo(10, 20);
console.log(retangulo.calcularArea())

const circulo = new Circulo(10);
console.log(circulo.calcularArea())
