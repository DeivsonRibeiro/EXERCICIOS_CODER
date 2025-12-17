const pai = { nome: 'Pedro', corCabelo: 'preto'}


const filha1 = Object.create(pai) // cria um objeto com o prototipo pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // herda do pai

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
}) 
console.log(filha2.nome)
filha2.nome = 'Carla' // não vai alterar pois writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // herda do pai    

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}
// hasOwnProperty verifica se o atributo é do próprio objeto ou herdado
