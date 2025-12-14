const notas = [7.7, 6.5, 8.0, 9.3, 5.0, 7.1, 10.0];

// Sem callback (forma imperativa)
const notasBaixas1 = [];// Array para armazenar notas baixas
for (let i in notas) {// Percorrendo o array de notas
    if (notas[i] < 7) {// Verificando se a nota é menor que 7
        notasBaixas1.push(notas[i]);// Adicionando nota baixa ao array
    }   
}
console.log(notasBaixas1);// Imprimindo notas baixas

// Com callback (forma declarativa)
 const notasBaixas2= notas.filter(function(nota) {// Usando filter com função anônima
    return nota < 7;// Retornando notas menores que 7
});
console.log(notasBaixas2);// Imprimindo notas baixas

// Com callback usando arrow function
const notasBaixas3 = notas.filter(nota => nota < 7);// Usando filter com arrow function
console.log(notasBaixas3);// Imprimindo notas baixas