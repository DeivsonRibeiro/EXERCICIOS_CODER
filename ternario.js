// Cria uma função chamada "resultado" que recebe "nota" como parâmetro
// A função usa o operador ternário para verificar:
// Se a nota for maior ou igual a 7, retorna "Aprovado"
// Caso contrário, retorna "Reprovado"

//Isso é uma arrow function.

const resultado = nota => nota >= 7 ? 'Aprovdo' : 'Reprovado'


// Imprime no console o resultado da função passando 7.1
// Como 7.1 é maior que 7, retorna "Aprovado"
console.log(resultado(7.1))



// Imprime no console o resultado da função passando 5.3
// Como 5.3 é menor que 7, retorna "Reprovado"
console.log(resultado(5.3))