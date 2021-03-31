// An interface describes the structure of an object
// Describes how an object should look like 
// We cannot assign concrete values
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    gender: string;

    greet(ohrase: string): void;
}

let user1: Person;

user1 = {
    firstName: 'Gersi',
    lastName: 'Veshi',
    gender: 'Male',
    age: 28,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.firstName);
    }
};

user1.greet('Hi there I am');