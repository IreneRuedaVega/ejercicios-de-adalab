'use strict';

const numbers = [2, 6, 8, 10, 12, 14];

let acc = 0;

function averange (numbers){
  for(let i = 0; i < numbers.length; i++){
  acc += numbers[i] / 6;
  }
  return `La media es ${acc})`;
}

console.log(averange(numbers));

