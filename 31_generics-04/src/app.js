// Gneric Functions
function merge(objectA, ObjectB) {
    return Object.assign(objectA, ObjectB);
}
const mergedObject = merge({ fullName: 'Gersi Veshi' }, { job: 'Software Developer' });
console.log(mergedObject);
function countAndPrint(element) {
    let descText = 'Got no value.';
    if (element.length === 1) {
        descText = 'Got 1 elemtnt.';
    }
    else if (element.length > 1) {
        descText = 'Got ' + element.length + ' elements.';
    }
    return [element, descText];
}
console.log(countAndPrint('Hi there'));
function extractConvert(obj, key) {
    return obj[key];
}
extractConvert({ name: 'Gersi' }, 'name');
