// Função rand: recebe um objeto e usa desestruturação com valores padrão
// min = 0 e max = 1000 caso não sejam informados
function rand({ min = 0, max = 1000 }) {
  // Gera um valor aleatório entre min e max
  const valor = Math.random() * (max - min) + min;
  // Arredonda para baixo e retorna

  return Math.floor(valor);
}
// Objeto com max e min definidos
const obj = { max: 50, min: 40 };
console.log(rand(obj)); // número entre 40 e 50

console.log(rand({ min: 955 })); // Aqui passamos apenas 'min', então 'max' usa o valor padrão (1000)

console.log(rand({})); // Chamando com objeto vazio, então min = 0 e max = 1000
