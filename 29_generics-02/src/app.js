// Generics
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObject = merge({ fullname: 'Gersi Veshi' }, { age: 28 });
console.log(mergedObject);
