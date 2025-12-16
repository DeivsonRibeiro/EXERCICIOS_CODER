const obj= {a:1, b:2, c:3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj)) //converte objeto para JSON    
//output: {"a":1,"b":2,"c":3}  a função soma não aparece no JSON

//console.log(JSON.parse("{a:1, b:2, c:3}")) // dá erro pq as chaves tem que estar entre aspas duplas   

console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // converte JSON para objeto
//output: { a: 1, b: 2, c: 3 }

console.log(JSON.parse('{"a":1, "b":2, "c":3, "d": {"e": 4, "f": 5}}')) 
//output: { a: 1, b: 2, c: 3, d: { e: 4, f: 5 } }
// converte JSON para objeto, incluindo objeto dentro do JSON   
console.log(JSON.parse('{"a": 1, "b": "string", "d", true,"d":{}, "e": [] }'))