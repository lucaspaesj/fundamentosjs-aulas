let salarioDoAmigo = 1000;
let meuSalario = "2999.14";
let meuSalarioCorrigido = Number(meuSalario);

console.log(salarioDoAmigo + meuSalarioCorrigido);
console.log(
    typeof(salarioDoAmigo),
    salarioDoAmigo
)
console.log(
    typeof(meuSalario), // saber o tipo da variável
    meuSalario
)

console.log(
    isNaN(meuSalario) // isNaN para saber se a variável não é um número
)

let minhaString = "Olá mundo!";

let minhaOutraString = "Olá mundo2";

let minhaStringComVariaveis = 
`${minhaString} - ${minhaOutraString}. AE!` // concatenando variáveis dentro de outra no momento de declaração

console.log(
    minhaStringComVariaveis
)