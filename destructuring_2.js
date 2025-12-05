
// Desestruturação básica de array:
// Pega apenas o primeiro elemento (10) e guarda em 'a'
const [a] = [10]
console.log(a)

// Desestruturação com elementos ignorados e valor padrão:
// n1 recebe 10
// (pula o índice 1)
// n3 recebe 9
// (pula o índice 3)
// n5 recebe undefined (índice 4 não existe)
// n6 recebe 0 (valor padrão, pois índice 5 não existe)
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


// Desestruturação de array aninhado:
// Primeiro pula o índice 0
// Depois acessa o segundo elemento do array principal -> [9, 6, 8]
// Dentro desse array: pula o índice 0 (valor 9) e pega o índice 1 -> 6
const [, [, nota]] = [[, 8,8], [9,6,8]]
console.log(nota)