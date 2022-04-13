const food = ['Noodle', 'Pasta', 'Ice-cream', 'Meat', 'Cucumber', 'Olives'];
const food1 = ['Fries', 'Ice-cream', 'Pizza', 'Olives', 'Hamburgers'];

function isTheSame (food, food1) {

  const foods = [];
  for(let foodType of food) {
    for (let food1Type of food1) {
      foodType === food1Type ? foods.push(foodType) : ' ';
    }
  }

  return foods.length > 0 ? console.log(`${foods}`)  : console.log(false) ;

}

isTheSame(food,food1);