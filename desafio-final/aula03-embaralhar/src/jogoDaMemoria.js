class JogoDaMemoria {
    // se mandar um obj = {tela: 1, idade: 2, etc: 3}
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }) {
        this.tela = tela
        // caminho do arquivo sempre relativos ao index.html!
        this.heroisIniciais = [
            {img: "./arquivos/Deadpool.png", name: "deadpool"},
            {img: "./arquivos/Flash.png", name: "Flash"},
            {img: "./arquivos/Spider.png", name: "Spider"},
            {img: "./arquivos/Thor.png", name: "Thor"}
        ]
    }
    // para usar o this, não podemos usar static!
    inicializar () {
        // vai pegar todas as funções da classe tela
        // coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
        // força a tela a usar o THIS de jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar() {
        const copias = this.heroisIniciais
        // duplicar os herois
        .concat(this.heroisIniciais)
        //entrar em cada item e criar um id aleatorio
        .map(item => {
            return Object.assign({}, item, {id: Math.random() / 0.5})
        })
        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        
        this.tela.atualizarImagens(copias)
    }
    jogar() {
        this.embaralhar()
    }
}