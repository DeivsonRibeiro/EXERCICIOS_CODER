const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 6.8, bolsista: false },
  { nome: 'Ana', nota: 8.5, bolsista: true }
];  

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual;
}); 
console.log(todosBolsistas ? 'Todos são bolsistas' : 'Nem todos são bolsistas');

// Desafio 2: Algum aluno é bolsista?   
const algumBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual;
}

);      
console.log(algumBolsista ? 'Algum aluno é bolsista' : 'Nenhum aluno é bolsista');  

    