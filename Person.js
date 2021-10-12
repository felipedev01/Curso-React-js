class Person {


    constructor(name,age){

        this.name=name;
        this.age=age;

    }
    greetings(){
        console.log("Olá meu nome é ", this.name,"e mina idade è",this.age, 'e minha turma é a ',this.turma)
    }
} module.exports=Person;
