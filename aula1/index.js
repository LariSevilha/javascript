// var nome = "Lari Sevilha";
// let idade = 19;

// if (idade >= 18 && idade <= 26 ){
//     console.log(`Eu ${nome} tenho ${idade} anos e sou maior de idade`);
// }
// else if (idade < 18) {
//     console.log(`Eu ${nome} tenho${idade} anos e sou menor de idade`);
// }else{
//     console.log(`Eu ${nome} tenho ${idade} anos `);
// }

let diaDaSemana = 2; 
let mensagem;

switch (diaDaSemana) {
  case 1:
    mensagem = "Hoje é domingo.";
    break;
  case 2:
    mensagem = "Hoje é segunda.";
    break;
  default:
   mensagem = "Dia inválido.";
}

console.log(mensagem);