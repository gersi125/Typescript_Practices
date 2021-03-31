const person = {
    name: 'Gersi',
    surname: 'Veshi',
    age: 28,
    gender: 'male',
    hobbies: ['Sports', 'Painting']
};

let favoriteActivities: string[];
favoriteActivities = ['Painting'];


console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby);
}