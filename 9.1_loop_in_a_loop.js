
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0 ; i <listOfNeighbours.length ; i++) {
  for (let country of listOfNeighbours[i]) {console.log(`Neighbour: ${country}`);};
};

