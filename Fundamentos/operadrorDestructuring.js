// novo recurso do ES2015

// Objeto pessoa com dados básicos e um objeto interno 'endereco'
const pessoa ={
nome: "Ana",
idade: 5,
endereco: {
    logradouro:'Rua ABC',
    numero: 1000
}
}
// Desestruturação simples: pega 'nome' e 'idade' diretamente do objeto pessoa
const {nome, idade} = pessoa
console.log(nome, idade)

// Desestruturação com renomeação:
// 'nome' é renomeado para 'n' e 'idade' para 'i'
const {nome: n, idade: i}= pessoa
console.log(n, i)

// Desestruturação com valor padrão:
// 'sobrenome' não existe, então será 'undefined'
// 'bemHumorada' não existe, então recebe o valor padrão 'true'
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

// Desestruturação de objeto aninhado:
// pega propriedades internas do objeto 'endereco'
// 'cep' não existe e será 'undefined'
const {endereco: {logradouro, numero, cep}}= pessoa
console.log(logradouro,numero,cep)