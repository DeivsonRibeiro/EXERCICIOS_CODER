// Adiciona um método chamado "entre" ao protótipo de Number

Number.prototype.entre = function (inicio, fim) {
  // Retorna true se o número estiver entre "inicio" e "fim" (inclusive)

  return this >= inicio && this <= fim;
};
// Função que imprime o resultado de acordo com a nota
const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de Honra"); // Exibe mensagem para notas excelentes
  } else if (nota.entre(7, 8.99)) {
    console.log("Apovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperaçao");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota Invalida");
  }
  console.log("Fim");
};

imprimirResultado(10);
imprimirResultado(8.9);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
