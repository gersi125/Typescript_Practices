var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target, propName) {
    console.log('Property Decorator!');
    console.log('Property target: ' + target);
    console.log('Property name: ' + propName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    set myprice(val) {
        if (val > 0) {
            this.price = val;
        }
        else {
            throw new Error('Invalid price value!');
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Logger
], Product.prototype, "title", void 0);
