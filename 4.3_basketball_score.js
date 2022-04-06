function avgScore (arr) {
  let sum = 0;
  let counter = 0;
  let avg = 0;
  for (let i=0 ; i<arr.length-1; i++) {
    sum += arr[i];
    counter++;
  }
  avg = sum/counter;
  return avg;
}

let jhonTeamScore = [89, 120, 103];
let mikeTeamScore = [116, 94, 123];
let maryTeamScore = [97, 134, 105];

let jhonAvg = avgScore(jhonTeamScore);
let mikeAvg = avgScore(mikeTeamScore);
let maryAvg = avgScore(maryTeamScore);

if (jhonAvg > mikeAvg && jhonAvg > maryAvg) {
console.log(`The winner is Jhon's Team with the average score of ${jhonAvg}`);
}
else if (mikeAvg > jhonAvg && mikeAvg > maryAvg) {
  console.log(`The winner is Mike's Team with the average score of ${mikeAvg}`);
}
else if (maryAvg > jhonAvg && maryAvg > mikeAvg){
  console.log(`The winner is Mary's Team with the average score of ${maryAvg}`);
}

else {
  console.log(`It's a tie`);
}

