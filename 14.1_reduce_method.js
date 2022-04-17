const arr = [2, 4, 99, 54, 65, 111, 95.2, 17];

let max = arr.reduce((max, currentValue) => {
  if (currentValue > max) return currentValue;
  return max;
});

console.log(max);

let sumOfEvenNums = arr.reduce((sum, currentValue) => {
  if (currentValue % 2 === 0) {
    sum += currentValue;
  }
  return sum;
}, 0);

console.log(sumOfEvenNums);


let sum = arr.reduce((total, currentValue) =>{
   return total += currentValue;
});
let avg =  sum/arr.length;

console.log(avg);