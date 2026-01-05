const contadorA = require('./instanciaUnica')
const contadoraB = require('./instanciaUnica')

const contadoraC = require('./instanciaNova')() // chama uma função
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadoraB.valor)

contadoraC.inc()
contadoraC.inc()
console.log(contadorD.valor)