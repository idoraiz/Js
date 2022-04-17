const foods = ['flafel', 'sabich', 'hummus', 'pizza with extra pineapple'];

foods.sort(); // ascending order
foods.reverse; // descending order

const foodsWithUpperCase = ['falafel', 'Sabich', 'hummus', 'pizza with extra pineapple'];
foodsWithUpperCase.sort(function(a, b) { // sory by abc
  if (a.toUpperCase() < b.toUpperCase()) {
    return -1;
  }
  if (a.toUpperCase() > b.toUpperCase()) {
    return 1;
  }
  return 0;
});

foodsWithUpperCase.sort(function(a, b) { // sory by reverse order
  if (a.toUpperCase() < b.toUpperCase()) {
    return 1;
  }
  if (a.toUpperCase() > b.toUpperCase()) {
    return -1;
  }
  return 0;
});

const words = ['apple', 'supercalifragilisticexpaialidocious', 'hi', 'zoo'];
words.sort(function(a, b) { 
  if (a.length < b.length) {
    return 1;
  }
  if (a.length > b.length) {
    return -1;
  }
  return 0;
});


console.log(foodsWithUpperCase);
console.log(foods);
console.log(words);

