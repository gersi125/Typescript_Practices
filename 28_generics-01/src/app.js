//Generics
//Promises
//const names: Array<string> = [];
// Promise Sample
//const promise: Promise<string> = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve('This is done!');
//    }, 2000);
//});
// Generic Function Sample
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Gersi', lastName: 'Veshi', age: 28 }, { gender: 'male' }));
