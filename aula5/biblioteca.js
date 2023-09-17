class Autor{
    constructor(nome,nacionalidade,data_de_nascimento){
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.data_de_nascimento = data_de_nascimento;
     }
}
class Livro{
    constructor(titulo,ano_de_publicacao){
        this.titulo = titulo;
        this.ano_de_publicacao = ano_de_publicacao; 
    }
}
class Usuario{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade; 
    }
}

const autor   = new Autor('larissa', 'brasileira', '10/02/2004' )
const livro   = new Livro('o menino maluquinho', '2010')
const usuario = new Usuario('carlos', '15')

//autor
console.log(autor.nome);
console.log(autor.nacionalidade);
console.log(autor.data_de_nascimento);

//livro
console.log(livro.titulo);
console.log(livro.ano_de_publicacao);

//usuario
console.log(usuario.nome);
console.log(usuario.idade);
