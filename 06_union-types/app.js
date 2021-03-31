function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else if (typeof input1 === 'string' && typeof input2 === 'string') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
}
var combinedAges = combine(30, 26);
console.log(combinedAges); // this works cause we have both number inputs
var combinedNames = combine('Max', 'Mara');
console.log(combinedNames);
