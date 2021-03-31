function add(n1: number, n2: number) {
  return n1 + n2;
} //In this function the return type is inferred by typescript 

function printResult(num: number) {
  console.log('Result: ' + num);
}// The return type of this function is voidnpm start

printResult(add(14, 22)); //We pass our function as an argument