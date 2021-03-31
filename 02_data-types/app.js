function add(n1, n2, showResultParameter, phrase) {
    var result = n1 + n2;
    if (showResultParameter) {
        console.log(phrase + result);
    }
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect type of input!');
    }
    return n1 + n2;
}
var number1 = 56;
var number2 = 3.5;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
