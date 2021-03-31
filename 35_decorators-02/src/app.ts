function Logger(target: any, propName: string | Symbol) {
    console.log('Property Decorator!');
    console.log('Property target: ' + target);
    console.log('Property name: ' + propName);

}

class Product {
    @Logger
    title: string;
    private price: number;    

    set myprice(val: number) {
        if(val > 0) {
        this.price = val;
        } else {
            throw new Error('Invalid price value!');
        }
    }
    
    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }
}