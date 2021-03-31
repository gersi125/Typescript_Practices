var _a;
function AnimalSpeed(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving with speed: ' + speed);
}
AnimalSpeed({ type: 'bird', flyingSpeed: 320 });
// Type Casting
// When we want to specify the type of a variable or an object
// in case Typescript cannot tell
// const usrInput = <HTMLInputElement>document.getElementById('user-input');
var usrInput = document.getElementById('user-input');
usrInput.value = 'Greetings Everybody';
var errorGroup = {
    email: 'Not a vaild e-mail address.',
    username: 'Username must start with a capital letter.'
};
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
    surname: 'Sado'
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
