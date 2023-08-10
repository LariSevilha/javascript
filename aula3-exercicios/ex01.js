const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularTabuada(numero) {
  console.log(`Tabuada do número ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

rl.question('Digite um número para ver sua tabuada: ', (input) => {
  const numero = parseInt(input);

  if (!isNaN(numero)) {
    calcularTabuada(numero);
    rl.close();
  } else {
    console.log("Número inválido. Tente novamente.");
    rl.close();
  }
});
