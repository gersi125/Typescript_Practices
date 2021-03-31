const userName = 'GV';
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

const add = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));

const hobbies = ['Cooking', 'Sports', 'Painting'];
console.log(hobbies[1]);

// When you want to extract all values of an Array

const activeHobbies = ['Hiking', 'Running', 'Sky-Diving'];
activeHobbies.push('Street Racing'); // Adding a new element to the array

//... => Spread Operator
//       It tells javascript to pull out all the elements of that array
//       and add them as a list of values in which you used that operator

activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: 'Max',
  surname: 'Mara',
  age: 45
} 

const copiedPerson = {...person}; // copies all the values from the object person
console.log(copiedPerson);        // it does not point to the object in memory

//Rest parameters => when we expect a list of values as parameters
const addition = (...numbers: number[]) => {
  
  return numbers.reduce((curResult, curValue) =>{
    return curResult + curValue;
  },0);
};

const addedNumbers = addition(45, 5, 77, 8, 9);
console.log(addedNumbers);

//Array and Object Destructuring
const [hobby1, hobby2, ...reminingHobbies] = hobbies;
// Destructuring does not change the old array


const { surname } = person;

console.log(surname);

