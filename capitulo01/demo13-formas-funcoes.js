// formas de declarar e chamar a função:

function minhaFuncao1(parametro1){
    return `aee`
}

const minhaFuncao2 = function (parametro1){
    return `aeee ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `aeee ${parametro1}`
}

// se há somente um parâmetro, ele nem precisa estar entre parênteses
//  e o corpo do código não precisa, também, estar entre chaves e nem com o return
const minhaFuncao4 = parametro1 => `aee ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `aee ${parametro1}`
}

obj1.minhaFuncao("test")

console.log(obj1.minhaFuncao("test"))

const obj2 = {
    minhaFuncao (parametro1){
        return `aeee ${parametro1}`
    }
}

console.log(obj2.minhaFuncao("Consegui!"))