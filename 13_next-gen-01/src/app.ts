// Code goes here!

//const => allwos you to define constants or variables
//         constants cannot be changed
const userName ="GersiVeshi";
let age = 28;

//let => similar to var
//       let can be changed
//
//you should not use var anymore


//function addition(a: number, b: number) {
//   var result;
//    result = a + b;
//    return result;
//}

// var result is available only within the scope of the level where it is created

//in order to save the function keyword we write function like the one below:

//const add = (a: number, b: number) => {
//    return a + b;
//7}
//console.log(add(5, 45));

//const add = (a: number, b: number) => a + b;

const add = (a: number, b: number = 1) => a + b;// 1 is a Deafult Argument
                                                // Default arguments are put last on the list of values for the varibles

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click',event => console.log(event));
}

printOutput(add(7));