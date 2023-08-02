const data = "28/02/2024";
let vetor = data.split("/");
let ano = parseInt(vetor[2]);

let meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
    console.log(`${vetor[0]} de ${meses[vetor[1] - 1]} de ${vetor[2]} - Bissexto`);
}else{
    console.log(`${vetor[0]} de ${meses[vetor[1] - 1]} de ${vetor[2]} - Não bissexto`);
}