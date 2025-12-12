let comparaComThis = function(param) {
    console.log(this === param)
}   
comparaComThis(global) // no node o this aponta para o objeto global

const obj = {}
comparaComThis = comparaComThis.bind(obj) // bind amarra o this ao obj
comparaComThis(global) // agora o this não aponta mais para o objeto global
comparaComThis(obj) // agora o this aponta para o obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // no node o this aponta para o objeto global
comparaComThisArrow(module.exports) // no node o this não aponta para o module.exports  

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // o this não é alterado com o bind, continua apontando para o module.exports
comparaComThisArrow(module.exports) // o this continua apontando para o module.exports