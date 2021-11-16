// meses começam do zero!!
const dataAniversario = new Date(2020, 0, 20)
//console.log(dataAniversario)

const primeiraDataDoJS = new Date(0)
//console.log(primeiraDataDoJS.getTime())

const hoje = new Date()
// console.log(hoje.toString())
// console.log(hoje.toLocaleDateString())

// formato padrão recomendado
// console.log(hoje.toISOString())

const dia = hoje.getDate()
// hoje.setDate(dia + 5) // +5 dias depois de hoje
// hoje.setHours(10, 30, 0)

console.log(`
    Dia: ${hoje.getDate()}
    Mês: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Segundos: ${hoje.getSeconds()}
`) // retornando todos os valores da variável hoje, que diz respeito ao dia corrente

console.log(
    new Date(2021, 11, 5) > new Date(2000, 1, 1)
)