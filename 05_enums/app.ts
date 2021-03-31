enum Role {ADMIN = 'Admin', READ_ONLY = 'Read only', USER = 'normal user', READ_WRITE = 'user with read/write privileges'};

const person = {
    name: 'Gersi',
    surname: 'Veshi',
    age: 28,
    gender: 'male',
    hobbies: ['Sports', 'Painting'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Painting'];


console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby);
}

if(person.role === Role.ADMIN) {
    console.log('is author');
}