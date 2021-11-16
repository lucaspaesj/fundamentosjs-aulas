const pessoa = {
    _nome: "", // variáveis que não devem ser acessadas por fora, é privada
    _idade: 20,
    get nome() { // quem tentar acessar esta variável estará referenciando a _nome
        return this._nome
    },
    set nome(valor){ // quando alguém tenta passar o valor pra variável "nome", o set intercepta o valor
        this._nome = valor.toUpperCase() // o valor informado será transformado conforme estabelecido aqui
    },

    get podeDirigir(){ // propriedade calculada - 
        return this._idade > 18 // pois pega o valor privado e vai verificar se ela é maior que 18, neste caso
    },
    set idade(valor){ // variável foi só criada no set, portanto, se tentarmos obter o valor dela no terminal, não irá retornar nada
        this._idade = valor
    }

}

pessoa.nome = "maria do céu";
console.log(pessoa.nome)

pessoa.idade = 16
console.log(pessoa.podeDirigir)
// console.log(pessoa.idade) - aqui, irá obter o valor undefined, pois não foi referenciada no get