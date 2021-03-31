function combine(input1: number | string | boolean, input2: number | string | boolean){
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number') {
     result = input1 + input2;
  } else  if(typeof input1 === 'string' && typeof input2 === 'string') {
     result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
}

const combinedAges = combine(30, 26);
console.log(combinedAges);// this works cause we have both number inputs

const combinedNames = combine('Max', 'Mara');
console.log(combinedNames);