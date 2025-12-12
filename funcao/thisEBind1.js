function Pesssoa(){
    this.idade = 0;
    
    const self = this
    
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*ind(this)*/,1000) 
}
new Pesssoa