// From function declarations to function expressions


// function welcome() {
//   let welcome = 'Welcome to Appleseeds Bootcamp!';
//   return welcome;
// }

let welcome = function () {
  return 'Welcome to Appleseeds Bootcamp!';
}

// function power(a) {
//   let myNumber = a;
//   let result = Math.pow(myNumber, 2);
//   return result;  
// }




let result = function (num) {
  return Math.pow(num,2);
}

// function add(a, b = 5) {
//   let myNumber = a;
//   let sum = myNumber + b;
//   return sum;
// }



let sum = function (a,b=5) {
  return a + b;
}

console.log(welcome());
console.log(result(2));
console.log(sum(3,5));


// From function expressions to function declarations

// const hello = () => "Hello!";

function hello () {
  return 'Hello!';
}

// const squareRoot = a => Math.sqrt(a);

function squareRoot (a) {
  return Math.sqrt(a);
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers (a,b) {
  return (Math.random() * (a-b) +b) ;
}