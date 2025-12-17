const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o último elemento
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen'); // adiciona um elemento no final
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift(); // remove o primeiro elemento
console.log(pilotos); // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton'); // adiciona um elemento no início
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // a partir do índice 2, não remove nada, adiciona Bottas e Massa
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1); // a partir do índice 3, remove 1 elemento
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2); // novo array a partir do índice 2
console.log(algunsPilotos1); // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4); // novo array do índice 1 ao 3
console.log(algunsPilotos2); // [ 'Alonso', 'Bottas', 'Raikkonen' ]