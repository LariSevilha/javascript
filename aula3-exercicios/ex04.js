const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prepararPedido(pedido) {
  console.log(`Preparando o pedido: ${pedido}`);
  cozinharPedido(pedido);
}

function cozinharPedido(pedido) {
  console.log(`Cozinhando o pedido: ${pedido}`);
  empacotarPedido(pedido);
}

function empacotarPedido(pedido) {
  console.log(`Empacotando o pedido: ${pedido}`);
  entregarPedido(pedido);
}

function entregarPedido(pedido) {
  console.log(`Entregando o pedido: ${pedido}`);
  pedidoEntregue(pedido);
}

function pedidoEntregue(pedido) {
  console.log(`Pedido entregue: ${pedido}`);
}

rl.question('Bem-vindo ao nosso restaurante! O que você gostaria de pedir? ', (pedido) => {
  prepararPedido(pedido);
  rl.close();
});
