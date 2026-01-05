const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconsto: 0.15
}

fs.writeFile(__dirname + '/aquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo')
})