const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularTabuadaRecursiva(numero, multiplicador) {
  if (multiplicador > 10) {
    return;
  }

  console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);

  calcularTabuadaRecursiva(numero, multiplicador + 1);
}

rl.question('Digite um número para ver sua tabuada: ', (input) => {
  const numero = parseInt(input);

  if (!isNaN(numero)) {
    calcularTabuadaRecursiva(numero, 1);
    rl.close();
  } else {
    console.log("Número inválido. Tente novamente.");
    rl.close();
  }
});