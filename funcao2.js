// Armazenando função em variável
const imprimirSoma = function (a, b){   //Função anonima
    console.log(a + b)
}   
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b)=> {  //=> significa função
return a +  b
}
console.log(soma(2, 3))
// retorno implicito
const subtracao = (a, b) => a - b // função de apenas uma linha
console.log(subtracao(2, 3))

