// operador ... rest(juntar)/ spread(espalhar )
// usar rest com parâmetro de função 

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 1250.40}
const clone = {ativo: true, ...funcionario}
const clone2 = {...funcionario}
console.log(clone)
console.log(clone2)


// usar spread com array

const grupoA = ['João', 'Pedro','Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)