// Gneric Functions
function merge<T extends object, U extends object>(objectA: T, ObjectB: U) {
    return Object.assign(objectA, ObjectB);
}

const mergedObject = merge({fullName:'Gersi Veshi'}, {job:'Software Developer'});

console.log(mergedObject);

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element:  T) {
    let descText = 'Got no value.';
    if(element.length === 1) {
        descText = 'Got 1 elemtnt.';
    } else if(element.length > 1) {
        descText = 'Got ' + element.length + ' elements.';
    }
    return [element, descText];
}

console.log(countAndPrint('Hi there'));

function extractConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractConvert({name: 'Gersi'}, 'name');