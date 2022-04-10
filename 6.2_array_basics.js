const people = ['Greg', 'Mary', 'Devon', 'James'];

for (let i=0; i < people.length; i++) {
  console.log(people[i]);
}

people.shift();
people.pop();

people.unshift('Matt');
people.push('Ido');

for (let i=0; i <= 1; i++) {
  console.log(people[i]);
}

console.log(people.slice(2,4));

console.log(people.indexOf('Mary'));

console.log(people.indexOf('Foo'));

people.splice(2,1,'Elizabeth', 'Artie');

console.log(people);

const withBob = people;

let newArr = withBob.concat(people);

console.log(newArr);

