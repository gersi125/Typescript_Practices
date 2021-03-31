interface Greetable {
    firstName: string;
    lastName: string;

    greet(phrase: string): void;
}

// You can implement multiple interfaces
class Person implements Greetable {
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