var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'GV';
// userName = 'Maximilian';
var age = 30;
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
var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5, 2));
var hobbies = ['Cooking', 'Sports', 'Painting'];
console.log(hobbies[1]);
// When you want to extract all values of an Array
var activeHobbies = ['Hiking', 'Running', 'Sky-Diving'];
activeHobbies.push('Street Racing'); // Adding a new element to the array
//... => Spread Operator
//       It tells javascript to pull out all the elements of that array
//       and add them as a list of values in which you used that operator
activeHobbies.push.apply(// Adding a new element to the array
activeHobbies, hobbies);
console.log(activeHobbies);
var person = {
    name: 'Max',
    surname: 'Mara',
    age: 45
};
var copiedPerson = __assign({}, person); // copies all the values from the object person
console.log(copiedPerson); // it does not point to the object in memory
//Rest parameters => when we expect a list of values as parameters
var addition = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = addition(45, 5, 77, 8, 9);
console.log(addedNumbers);
//Array and Object Destructuring
var hobby1 = hobbies[0], hobby2 = hobbies[1], reminingHobbies = hobbies.slice(2);
// Destructuring does not change the old array
var surname = person.surname;
console.log(surname);
