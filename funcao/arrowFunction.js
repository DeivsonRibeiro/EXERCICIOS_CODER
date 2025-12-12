let dobro = function(a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2 // return implícito
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())