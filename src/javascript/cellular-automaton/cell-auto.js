const stateOne = {
  prev: [1, 1, 1],
  next: 0,
};

const stateTwo = {
  prev: [1, 1, 0],
  next: 1,
};

const stateThree = {
  prev: [1, 0, 1],
  next: 1,
};

const stateFour = {
  prev: [1, 0, 0],
  next: 0,
};

const start = [1, 0, 1];

const history = [];

// function compare(firstState, secondState) {

// }

const arraysMatch = (arr1, arr2) => {
  return JSON.stringify(arr1) == JSON.stringify(arr2);
};

console.log(arraysMatch(stateThree.prev, stateThree.prev));

console.log(arraysMatch(stateThree.prev, stateFour.prev));
