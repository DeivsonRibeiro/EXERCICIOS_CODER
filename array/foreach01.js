const  aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
}); 
// 1) Agatha
// 2) Aldo
// 3) Daniel
// 4) Raquel

aprovados.forEach(nome => console.log(nome)); //   

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

