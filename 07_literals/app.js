function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' ||
        resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
var combinedAges = combine(32, 17, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Max', 'Mara', 'as-text');
console.log(combinedNames);
