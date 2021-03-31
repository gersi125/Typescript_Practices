const person: {
    name: string;
    surname: string;
    age: number;
    gender: string;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Gersi',
    surname: 'Veshi',
    age: 28,
    gender: 'male',
    hobbies: ['Sports', 'Painting'],
    role: [2, 'author'] // this tuple is ana array that should always have two elements
};

person.role.push('administrator'); // push() is allowed in tuples
//person.role[1] = 10;

//person.role = [0, 'admn', 'Gersi'] => Wrong

let favoriteActivities: string[];
favoriteActivities = ['Painting'];


console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby);
}