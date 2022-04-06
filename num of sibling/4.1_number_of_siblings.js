
// let numSiblings = prompt('How many siblings do you have?');
let numSiblings = 1;

if (numSiblings ===1 ) {
  console.log('1 sibling!');
}
else if (numSiblings > 1) {
  console.log('More that 1 sibling');
}
else {
  console.log('No siblings');
}

/*When you change the equality from == to === ,
it must have the same type and value of both arguments, and no longer uses type coerction,
so it interpated as flase . 
when the first if is fales and the second is false, it goes to the else part of 'No siblings'. */


