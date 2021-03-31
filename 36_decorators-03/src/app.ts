function Log(target: any, propName: string) {
    console.log('Property decorator Description');
    console.log('Targetr Element: ' + target);
    console.log('Property: ' + propName);
}

function Log2 (target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Access decorator');
    console.log('Target Element: ' + target);
    console.log('Element: ' + name);
    console.log('Descriptor of the Element: ' + descriptor);
}

function Log3 (target: any, name: string, descriptor: PropertyDescriptor ) {
    console.log('Method decorator');
    console.log('Target Element: ' + target);
    console.log('Method Name: ' + name);
    console.log('Descriptor of the Method: ' + descriptor);
}

function Log4(target: any, name: string, position: number) {
    console.log('Method Parameter Decorator');
    console.log('Target Parameter: ' + target);
    console.log('Method Name: ' + name);
    console.log('Position of the Parameter ' + position);

}
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price value.');
        }
    }

    constructor(t: string, p: number ) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}