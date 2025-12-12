const soma = function (x,y) {
    return x + y // função anônima atribuída a uma constante
}   

const imprimirResultado = function (a,b, operacao = soma) { // valor padrão é soma
    console.log(operacao(a,b)) // valor padrão é soma
}
imprimirResultado(3,4) // soma é a função padrão
imprimirResultado(3,4,soma) // soma é passada como parâmetro

imprimirResultado(3,4, function (x,y) { // função anônima passada como parâmetro
    return x - y
})
imprimirResultado(3,4, (x,y) => x * y) // arrow function passada como parâmetro
imprimirResultado(3,4, (x,y) => x / y) // arrow function passada como parâmetro

 const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}   
pessoa.falar() // método falar da constante pessoa

