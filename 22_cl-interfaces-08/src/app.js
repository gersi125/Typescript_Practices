var user1;
user1 = {
    firstName: 'Gersi',
    lastName: 'Veshi',
    gender: 'Male',
    age: 28,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.firstName);
    }
};
user1.greet('Hi there I am');
