function add(n1, n2) {
    return n1 + n2;
} //In this function the return type is inferred by typescript 
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(14, 22)); //We pass our function as an argument
