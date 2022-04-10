
let counter = 0;
const newArr = [];
const lengthArr = [];
function lengthOfStrings (arr) {
  
  for(let i=0; i<arr.length; i++) {
   newArr[i] = Array.from(arr[i]); 
   for(let j=0; j<newArr[i].length; j++) {
    counter++;
   }
   lengthArr[i] = counter;
   counter = 0;
  }

  return lengthArr;
}

function lengthStrArr(array) {
  const newArr2 = [];

  for (i = 0 ; i < array.length ; i++) {
    newArr2.push(array[i].length);
  }
  return newArr2;
}

let arr = ["boo","doooo", "hoo", "ro"];

console.log(lengthOfStrings(arr));
console.log(lengthStrArr(arr));