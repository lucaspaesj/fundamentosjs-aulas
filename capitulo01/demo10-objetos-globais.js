console.log("keys", Object.keys({nome: "Erick"})) // encontra as chaves do objeto
console.log("values", Object.values({nome: "Erick"})) // encontra os valores do objeto
console.log("now", Date.now()) // retorna a data desde a criação do javascript até o presente momento
console.log("random", Math.random()) // retorna um valor randômico

// global
console.log("global", global)

//** variáveis globais são criadas fora do escopo de funcções específicas
// e podem ser acessadas em qualquer parte do código
// variáveis locais são criadas dentro do escopo de uma função
// e podem ser acessadas apenas dentro da mesma