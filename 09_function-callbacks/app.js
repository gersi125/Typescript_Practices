function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
//let combineValues: Function;
var combineValues; // Sample function type
//combineValues = add; // we set the function add as a type for our variable combineValues
combineValues = add;
console.log(combineValues(8, 9));
addAndHandle(12, 44, function (result) {
    console.log(result);
});
console.log(addAndHandle);
