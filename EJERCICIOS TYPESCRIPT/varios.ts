class Person{
    name : string;
    age : number;
    id : number;
      constructor ( name: string,age:number, id:number){
        this.name = name;
        this.age = age;
        this.id = id;
      }
      sayHi(){
        if (this.age > 3){
            console.log("hello world");
            
        }else{
            console.log("no age for talk");
            
        }
      }
      eat(){
        const hambre : boolean = true; 
        if (hambre != true) {
            console.log("no tengo hambre");
                                
        } else{ 
            console.log("tengo hambre quiero comer te");                               
        }
       
      }
    
}

const person1 = new Person("camilo",23,1234);
const person2 = new Person("eladio",3,1234);
person2.sayHi();
person2.eat();




