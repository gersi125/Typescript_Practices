let userInput: unknown;
let userName: string;

//You can assign any type of value to a variable of type unknown
//The difference between unkown and any type is:
//you cannot assign the value of a variable of unknown type to another different type variable
//you can skip all type checkings with any 
userInput = 5;
userInput = 'Laurie';
userInput = userName;

//never is another type that functions cannot return
//this function never produces a return value
function generateError(message: string, code: number):never {
    throw{message: message, errorCode: code};
}

generateError('An error occurred! ', 5000);