
const arr = [1,7,3,0,-5,7,3,9];

function arrayLength (arr) {
  let arrLen = 0;
  for (let i=0; i !== undefined; i++) {
    arrLen++;
  }
  return arrLen;
}


for (let i=0; i < arr.length; i++) {
  console.log(arr[i]);
}

function arraySum (arr) {
  let sum = 0;
  for (let i=0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function arrayMulti (arr) {
  let multi = 1;
  for (let i=0; i < arr.length; i++) {
    multi *= arr[i];
  }
  return multi;
}

console.log(arrayMulti(arr));