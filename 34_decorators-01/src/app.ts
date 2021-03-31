// Decorators are all about classes.
//Decorators execute wen your class is defined not when you use that
function Logger(logString: string) {

    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p =new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.firstName;
        }
    }
}
//@Logger('LOGGING - PERSON')
@Logger('LOGGING')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
    firstName = 'Gersi';
    lastName = 'Veshi';

    constructor() {
        console.log('Creating an object of class Person...');
    }
}

const pers = new Person();
console.log(pers);