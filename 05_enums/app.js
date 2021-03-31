var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role["READ_ONLY"] = "Read only";
    Role["USER"] = "normal user";
    Role["READ_WRITE"] = "user with read/write privileges";
})(Role || (Role = {}));
;
var person = {
    name: 'Gersi',
    surname: 'Veshi',
    age: 28,
    gender: 'male',
    hobbies: ['Sports', 'Painting'],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ['Painting'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log('is author');
}
