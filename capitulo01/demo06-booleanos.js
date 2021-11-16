/* Tabela de true ou false no javascript
Falso
* false *
* 0 *
* [] *
* "" *
* '' *
* null *
* undefined *
* NaN *
*
Verdadeiro
* true *
* 1 *
* -1 *
* 0.5 *
* "0"
* */ 


const podeDirigir = true;
if(podeDirigir){ // neste if, o console irá imprimir a string apenas se a variável anteriormente declarada for true
    console.log("Ela pode dirigir")
}

const saldoEmConta = 1;
if(!saldoEmConta){ // esta exclamação transforma o valor da variável anteriormente declarada em false se estiver true e true se estiver false
    console.log("Não tem saldo")
}

const boolComString = "ae hackerzão!!";

// força o valor a true ou false
// de acordo com a tabela acima
console.log("boolComString", !!boolComString)

// negação
console.log("negação", !boolComString)

// negação + forçar a bool
console.log(
    "negação + forçar a bool",
    ! (!!boolComString)
)