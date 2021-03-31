// Defining the structure of a function through interfaces
interface AddFn {
   // Anonymous Function
   (a: number, b: number): number; 
}

interface Named {
    readonly firstName: string;
    readonly lastName: string;
    // Definin optional propertiesa in Interfaces
    outputName? : string;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

//-----Interface Inheritance-----//
interface Greetable extends Named {
    //readonly is a property that cannot be changed after indtantion
    greet(phrase: string): void;
}

class Person implements Greetable, Named {
    firstName: string;
    lastName: string;
    age= 28;

    constructor(n: string, s: string) {
        this.firstName = n;
        this.lastName = s;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.firstName)
    }
}
let user1: Greetable;

user1 = new Person('Gersi', 'Veshi')

user1.greet('Hi there I am');
console.log(user1);