const carrinho1 = [
    `{"nome": "Borracha", "preco": 7.99}`,
    `{"nome": "Caderno", "preco": 13.90}`,
    `{"nome": "Kit de Lapis", "preco": 41.22}`,
    `{"nome": "Caneta", "preco": 5.50}`
];  

const paraObjeto = json => JSON.parse(json);// Converte JSON para objeto
const apenasPreco = produto => produto.preco;//

const precos1 = carrinho1.map(paraObjeto).map(apenasPreco);
console.log(precos1); // [ 7.99, 13.9, 41.22, 5.5 ] 