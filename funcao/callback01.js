const fabricantes = ['Ford', 'Chevrolet', 'Honda']  //


function imprimir(nome, indice) {  
    console.log(`${indice + 1}. ${nome}`)  // Usando template string
}   

fabricantes.forEach(imprimir)
// Outra forma de usar o forEach com função anônima
fabricantes.forEach(function(a) {  
    console.log(a)  
})

// Usando arrow function
fabricantes.forEach(a => console.log(a))