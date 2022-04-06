function describeCountry(country, population, capitalCity) {
  let str = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return str;
}

let firstCountry = describeCountry("Israel", 10, "Jerusalem");

let secondCountry = describeCountry("America", 100, "Washington-D.C");
let thirdCountry = describeCountry("Brazil", 120, "Rio-de-janero");

console.log(`${firstCountry}.\n ${secondCountry}.\n ${thirdCountry}.`);
