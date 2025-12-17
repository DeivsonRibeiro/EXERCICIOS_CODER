const pessoa = {
    nome: "Ana",
    idade: 25,
    profissao: "Desenvolvedora"
};

console.log(pessoa.nome); // Acessando a propriedade 'nome'
console.log(Object(pessoa)); // Acessando a propriedade 'idade'
console.log(Object.values(pessoa)); // Acessando a propriedade 'profissao'
console.log(Object.keys(pessoa)); // Listando todas as chaves do objeto
console.log(Object.entries(pessoa)); // Listando todas as entradas (chave-valor) do objeto  

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
}); 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1999'
}); 
console.log(pessoa.dataNascimento); // Acessando a nova propriedade 'dataNascimento'
pessoa.dataNascimento = '02/02/2000'; // Tentando modificar a propriedade (não terá efeito)
console.log(pessoa.dataNascimento); // Verificando se a modificação teve efeito 
console.log(Object.keys(pessoa)); // Listando todas as chaves do objeto novamente

// Object.assign (ECMAScript 2015)
const destino = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 }; // Note que 'a' já existe em 'destino'
const obj = Object.assign(destino, o1, o2);
Object.freeze(obj); // Congelando o objeto para evitar modificações futuras 
obj.c = 1234; // Tentando adicionar uma nova propriedade (não terá efeito)      
console.log(obj); // undefined, pois a modificação não teve efeito

console.log(obj); // { a: 4, b: 2, c: 3 }
console.log(destino); // { a: 4, b: 2, c: 3 } - 'destino' foi modificado    