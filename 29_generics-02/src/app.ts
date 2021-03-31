// Generics
function merge<T extends object, U extends object>(objectA: T, objectB: U) {
    return Object.assign(objectA, objectB);
}

const mergedObject = merge({fullname: 'Gersi Veshi'}, {age: 28});
console.log(mergedObject);

