function lengthOfStrings (arr) {
  const newArr = [];
  let i = arr.length-1;
  while (i >= 0) {
    newArr.unshift(arr[i].length)
    i--;
  }
  return newArr;
} 



const arr = ['boo', 'doooo', 'hoo', 'ro'];
console.log(lengthOfStrings(arr));