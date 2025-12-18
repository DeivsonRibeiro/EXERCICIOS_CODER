const num = [1, 2, 3, 4, 5];

let resultado = num.map(function(e) {
    return e * 2;
});

console.log(resultado); // [2, 4, 6, 8, 10] 

const soma10 = e => e + 10; // arrow function   
const triplo = e => e * 3;// arrow function
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;   
resultado = num.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado); // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]   