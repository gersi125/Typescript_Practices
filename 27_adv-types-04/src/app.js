var _a;
function addition(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = addition(4, 88);
var result1 = addition('Gersi', 'Veshi');
result1.split('    ');
console.log(result1);
// Optional Chaining
var fetchedUserData = {
    id: 'usr1',
    name: 'Ili',
    surname: 'Sado',
    job: { title: 'CEO', company: 'ADISA' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// NULLISH COALESCE
var usrInput = null;
var storedData = usrInput !== null && usrInput !== void 0 ? usrInput : 'DEFAULT';
console.log(storedData);
