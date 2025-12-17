const sequencia = {
    _valor: 1, // convenção: atributo privado
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }   
    }
}
console.log(sequencia.valor) // 1
console.log(sequencia.valor) // 2   
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // 1000
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // 1001 (não altera pois 900 não é maior que o valor atual)
