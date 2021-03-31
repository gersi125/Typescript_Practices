var add;
add = function (n1, n2) {
    return n1 + n2;
};
var Person = /** @class */ (function () {
    function Person(n, s) {
        this.age = 28;
        this.firstName = n;
        this.lastName = s;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.firstName);
    };
    return Person;
}());
var user1;
user1 = new Person('Gersi', 'Veshi');
user1.greet('Hi there I am');
console.log(user1);
