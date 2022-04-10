function countryToLiveIn (language, isIsland, population, country) {

  if (language === 'english' && population < 50 && isIsland === false ) {
    console.log('You should live in Finland');
  }
  else {
    console.log(`${country} does not meet your criteria.`);
  }
}

let isIsland = false;
let language = 'english';
let population = 10; 
let country = 'Finland';

countryToLiveIn(language, isIsland, population, country);