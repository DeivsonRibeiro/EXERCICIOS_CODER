const filhas = ['Carla', 'Ana', 'Júlia'];
const filhos = ['Lucas', 'Mateus', 'Pedro'];    
const todos = filhas.concat(filhos, `Zoe`);

console.log(todos); // ['Carla', 'Ana', 'Júlia', 'Lucas', 'Mateus', 'Pedro']    

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])); // [1, 2, 3, 4, 5, [6, 7]] 