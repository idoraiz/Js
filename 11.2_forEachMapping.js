const arr1 = [1,2,3,4,5,6];
const newArr=[];
const arr3 = ['hello',3,4,56,'world','there'];
// const newArr = arr1.map(function doubleValues (num) {
//   return num*2;
// });

// const isEven = arr1.map(function evenValues (num){ {
//   return num % 2 === 0 ? newArr.push(num) : null ; 
//   }     
// });

const firstAndLastElements = arr3.map(function showFirstAndLast(array) {
  
   typeof(el) === typeof('') ? newArr.push(el) : null;
   const first = newArr[0];
   const last = newArr[newArr.length - 1];
   return typeof first === 'string' && typeof last === 'string' ? [first,last] : 'Nothing is a string';

});



// console.log(newArr);
console.log(firstAndLastElements);


