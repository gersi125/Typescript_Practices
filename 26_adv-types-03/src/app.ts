//Discriminating Union
interface Bird {
    type: 'bird'; // Type assignment
    flyingSpeed: Number;
}

interface Horse {
    type: 'horse';
    runningSpeed: Number;
}

type Animal = Bird | Horse;

function AnimalSpeed(animal: Animal) {
    let speed;

    switch(animal.type){
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse': 
            speed = animal.runningSpeed;
    }
    
    console.log('Moving with speed: ' + speed);
}

AnimalSpeed({type: 'bird', flyingSpeed: 320});

// Type Casting
// When we want to specify the type of a variable or an object
// in case Typescript cannot tell
// const usrInput = <HTMLInputElement>document.getElementById('user-input');
const usrInput = document.getElementById('user-input')! as HTMLInputElement;

usrInput.value = 'Greetings Everybody'

// Index Types
interface ErrorContainer {
   [prop: string]: string;
}

const errorGroup: ErrorContainer = {
    email: 'Not a vaild e-mail address.',
    username: 'Username must start with a capital letter.'
}

// Function Overloads
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Numeric & Combinable;

function addition(a: number, b: number): number; // Function Overload in Typescript 
function addition(a: string, b: string): string; 

function addition(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string')
    {
        return a.toString() + b.toString();
    }

    return a + b;
}

const result = addition(4, 88);
const result1 = addition('Gersi', 'Veshi');
result1.split('    ');
console.log(result1);

// Optional Chaining
const fetchedUserData = {
    id: 'usr1',
    name: 'Ili',
    surname: 'Sado',
    //job: { 
    //    title: 'CEO', 
    //    company: 'ADISA'
   // }
}

console.log(fetchedUserData?.job?.title);