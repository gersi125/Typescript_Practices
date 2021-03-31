function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');

    return function<T extends {new(...args: any[]): { firstName: string }}>(originalConstructor: T) {
      
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if(hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.firstName;
                }        
            }
        }
    };
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    firstName = 'Enzo';

    constructor() {
        console.log('Creating person object...');
    }

}

const pers = new Person();