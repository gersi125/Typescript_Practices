var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorators are all about classes.
//Decorators execute wen your class is defined not when you use that
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.firstName;
        }
    };
}
//@Logger('LOGGING - PERSON')
let Person = class Person {
    constructor() {
        this.firstName = 'Gersi';
        this.lastName = 'Veshi';
        console.log('Creating an object of class Person...');
    }
};
Person = __decorate([
    Logger('LOGGING'),
    WithTemplate('<h1>My person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
