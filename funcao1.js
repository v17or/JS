// função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b)
}
imprimirSoma('pao', ' de batata')

//função com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
