// function isString (str, callbackFunc) {
//   if (typeof(str) === typeof('')) {
//      return callbackFunc(str);
//   }
 
// }

// function logToScreen () {
//   console.log(string);
// }

// let string = 'hello';

// isString(string,logToScreen);

function firstWordUpperCase (str, callbackFunc) {
  let arr = str.split(' ');
  let firstWord = arr[0];
  firstWord = firstWord.toUpperCase();
}