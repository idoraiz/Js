const population = [1000,2000,3000,4000];

function precentageOfWorld (population) {
  return ((population/7900)*100);
}
function populationPrecentage (population) {

  const precentages = [];
  for (let i=0; i< population.length; i++) {
    precentages.push((precentageOfWorld(population[i]).toFixed(2)));
  }
  return precentages;
}

console.log(populationPrecentage(population));