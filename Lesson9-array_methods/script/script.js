//Task 1
const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];
const filterData = (dataArray, objectToFilter) => {
  let result = dataArray.filter(item => Object.keys(objectToFilter).every
  (key => item[key] === objectToFilter[key]));
  return result;
}
console.log(filterData(data, { position: "middle" }));
//Task 2
//Example array numbers
const numbersArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//callback functions
const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};
// Array method - ForEach
const ownForEach = (array, callback) => {
  for (let element of array) {
    callback(element, array.indexOf(element), array);
  }
}
console.log(ownForEach(numbersArray, logger));
//Array method - Map
const ownMap = (array, callback) => {
  const result = [];
  for (let number of array) {
    result.push(callback(number));
  }
  return result;
}
console.log(ownMap(numbersArray, increment));
//Array method - Filter
const ownFilter = (array, callback) => {
  const result = [];
  for (let element of array) {
    callback(element) ? result.push(element): 0;
  }
  return result;
}
console.log(ownFilter(numbersArray, isNegative));