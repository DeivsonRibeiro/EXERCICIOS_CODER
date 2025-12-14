// Closures é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função 


// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local     
// A função dentro() tem acesso ao contexto léxico de fora(), ou seja, ao escopo local de fora()    
