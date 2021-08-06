const pessoa = {
    nome: 'nome',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //Se usado const com chaves irá extrair objetos
console.log(nome, idade)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)