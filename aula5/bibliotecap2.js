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
        this.autores = [];
    }
    get autor(){
     return this.adicionarAutor();
    }
    adicionarAutor(autor){
      this.autores.push(autor);
    }
    
}
class Usuario{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade; 
        this.livros = [];
    }
    
    reservarLivro(livro){
        this.livros.push(livro);
    }
    
    mostrarLivros(){
      return this.livros
    }
}

const autor   = new Autor('larissa', 'brasileira', '10/02/2004' )
const autor2  = new Autor('jeferson', 'paraguaio', '10/02/1987' )

const livro   = new Livro('o menino maluquinho', '2010')
const livro2   = new Livro('o menino sem bone', '2006')

livro.adicionarAutor(autor)

const usuario = new Usuario('carlos', '15')
const usuario2 = new Usuario('helder', '28')

usuario.reservarLivro(livro)
usuario2.reservarLivro(livro2)

console.log(usuario.mostrarLivros())
console.log(usuario2.mostrarLivros())

