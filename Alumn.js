
const Person= require('./Person')


class Alumn extends Person {

    constructor(name,age,turma){
     
     super(name,age);
     this.turma=turma;
    }

    
}
let Marcos=new Alumn("Marcos",30,5)
Marcos.greetings()