console.log(typeof Array)   // function
console.log(typeof new Array)   // object
console.log(typeof [])  //  object 
                //indicie  0       1        2                     
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)  // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])  // Bia
console.log(aprovados[1])  // Carlos
console.log(aprovados[2])  // Ana
console.log(aprovados[3])  // undefined 

aprovados[3] = 'Paulo'
aprovados.push('Abia')// adiciona no final do array
console.log(aprovados.length)  // 5

aprovados[9] = 'Rafael' // cria posiçao vazia entre os elementos
console.log(aprovados.length)  // 10
console.log(aprovados[8] === undefined)  // true    

console.log(aprovados)
aprovados.sort() // ordena o array
console.log(aprovados)  

delete aprovados[1] // deleta o elemento mas mantem a posiçao
console.log(aprovados[1])  // undefined
console.log(aprovados)
console.log(aprovados[2])  // 10

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // remove a partir do indice 1, 1 elemento
console.log(aprovados)  // [ 'Bia', 'Ana' ]