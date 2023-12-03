// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

//Only retrieve the first names
// Write your code here:
//Approach1:
//const firstNames = fullNames.map(name => name.first);
//Approach2:
const firstNames = fullNames.map(function (name) {
  return name.first;
});
