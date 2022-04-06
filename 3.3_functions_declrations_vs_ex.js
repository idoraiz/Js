function precentageOfWorld1 (population) {
  return ((population/7900)*100);
}

let israelPop = precentageOfWorld1(250);
israelPop = israelPop.toFixed(2);
let usaPop = precentageOfWorld1(1100);
usaPop = usaPop.toFixed(2);
let japanPop = precentageOfWorld1(800);
japanPop = japanPop.toFixed(2);

console.log(`Israel precentage of world's population is about: ${israelPop}%,\nAmerica's population is: ${usaPop}%,\nand Japan population is: ${japanPop} %.`);

console.log('\n');

let precentageOfWorld2 = function (population) {
  return ((population/7900)*100);
}

let indialPop = precentageOfWorld2(750);
indialPop = indialPop.toFixed(2);
let turkeyPop = precentageOfWorld2(1100);
turkeyPop = turkeyPop.toFixed(2);
let russiaPop = precentageOfWorld2(760);
russiaPop = russiaPop.toFixed(2);

console.log(`India's precentage of world population is about: ${indialPop}%,\nTurkey's population is: ${turkeyPop}%,\nand Russia population is: ${russiaPop}%.`);