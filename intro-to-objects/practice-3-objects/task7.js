const isInRange = (number, object) => {
  return number >= object.min && number <= object.max;
};

console.log(isInRange(4, { min: 0, max: 5 })); // true

console.log(isInRange(4, { min: 4, max: 5 })); // true

console.log(isInRange(4, { min: 6, max: 10 })); // false

console.log(isInRange(5, { min: 5, max: 5 })); // true
