const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro"
};

for (let propriedade in pessoa){
    console.log(propriedade + ':' + pessoa[propriedade]);
}