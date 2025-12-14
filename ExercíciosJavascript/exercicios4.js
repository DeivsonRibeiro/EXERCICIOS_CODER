/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
function dividirECalcularResto(dividendo, divisor) {
    const resultado = Math.floor(dividendo / divisor);
    const resto = dividendo % divisor;
    console.log(`Resultado: ${resultado}, Resto: ${resto}`);
}   
dividirECalcularResto(10, 3); // Resultado: 3, Resto: 1

function teste(num1, num2){
    return num1 + num2
    console.log(`resultado: ${num1 + num2}`)
}  
console.log(teste(2,3)) //5

