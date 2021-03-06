function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void{
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}
//let combineValues: Function;
let combineValues: (a: number, b: number) => number; // Sample function type
//combineValues = add; // we set the function add as a type for our variable combineValues


combineValues = add;
console.log(combineValues(8,9));

addAndHandle(12, 44, (result) => {
    console.log(result);
});
console.log(addAndHandle);