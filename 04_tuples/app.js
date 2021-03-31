var person = {
    name: 'Gersi',
    surname: 'Veshi',
    age: 28,
    gender: 'male',
    hobbies: ['Sports', 'Painting'],
    role: [2, 'author'] // this tuple is ana array that should always have two elements
};
person.role.push('administrator');
//person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Painting'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
