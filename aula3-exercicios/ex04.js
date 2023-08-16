function prepararPedido(pedido){
    console.log(`Proparando o pedido: ${pedido}`);
    cozinharPedido(pedido)
}
function cozinharPedido(){
    console.log(`Cozinhando o pedido: ${pedido}`);
    empacotarPedido(pedido)
}
function empacotarPedido(){
    console.log(`Empacotando o pedido ${pedido}`);
    entregarPedido(pedido)
}
function entregarPedido(){
    console.log(`Entregando o pedido  ${pedido}`);
    pedidoEntregue(pedido)
}
function pedidoEntregue(){
    console.log(`Entregando o pedido  ${pedido}`);
}
const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout

});

rl.question ('Bem-vindo ao nosso restaurante! O que você gostaria de pedir?', (pedido) => {
   prepararPedido(pedido)
   rl.close();
});

