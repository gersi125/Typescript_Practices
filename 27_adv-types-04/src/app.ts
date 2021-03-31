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
    job: { title: 'CEO',  company: 'ADISA'}
}

console.log(fetchedUserData?.job?.title);

// NULLISH COALESCE
const usrInput = null;

const storedData = usrInput ?? 'DEFAULT';

console.log(storedData);