const valor = 'Global' // 

function minhaFuncao() { // Contexto Léxico
    console.log(valor) // Qual valor será impresso? Global ou Local?
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}   
exec() // Qual valor será impresso? Global ou Local?