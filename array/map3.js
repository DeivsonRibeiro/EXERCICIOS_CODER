Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray ;
}   


const carrinho1 = [
    `{"nome": "Borracha", "preco": 7.99}`,
    `{"nome": "Caderno", "preco": 13.90}`,
    `{"nome": "Kit de Lapis", "preco": 41.22}`,
    `{"nome": "Caneta", "preco": 5.50}`
];  

const paraObjeto = json => JSON.parse(json);// Converte JSON para objeto
const apenasPreco = produto => produto.preco;//

const precos1 = carrinho1.map2(paraObjeto).map2(apenasPreco);
console.log(precos1);