// const filledArr = new Array(100).fill('apple');

// console.log(filledArr);

const numberdArr = Array.from({ length: 100});
for(let i=0; i<numberdArr.length; i++){
numberdArr.fill(Math.floor(Math.random() * 100));
}

console.log(numberdArr);