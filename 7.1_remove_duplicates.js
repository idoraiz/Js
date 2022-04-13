function removeDup(arr) {
  const newArr = [] ;

  for (let i=0; i < arr.length; i++) {
    let isValueExist = arr[arr.indexOf(arr[i])] !== arr[i+1];
    let isValueAssigned = newArr.includes(arr[i]);
    if ( isValueExist && !isValueAssigned ) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
const arr = [3,3,4,4,6,3];

console.log(removeDup(arr));