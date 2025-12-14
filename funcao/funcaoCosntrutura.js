function Carro(velocidadeMaxima = 200, delta = 5) { // Construtor de objeto Carro
    // Atributo privado
    let velocidadeAtual = 0; // Velocidade inicial é 0
    // Método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    };
    // Método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    };
}
// Exemplo de uso
const uno = new Carro();    
uno.acelerar();
console.log(uno.getVelocidadeAtual()); // 5

   
const ferrari = new Carro(350, 20); // Velocidade máxima 350, delta 20
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual()); 

console.log(typeof Carro); // function
console.log(typeof ferrari); // object  
console.log(typeof uno); // object     
