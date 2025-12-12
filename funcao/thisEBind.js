const pessoa ={
    saudaçao:'Bom dia!',
    falar(){
        console.log(this.saudaçao) 
       
    }   
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO    

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() 