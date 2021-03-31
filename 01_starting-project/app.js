function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect type of input!');
    }
    return n1 + n2;
}
var number1 = 56;
var number2 = 3.5;
var result = add(number1, number2);
console.log(result);
