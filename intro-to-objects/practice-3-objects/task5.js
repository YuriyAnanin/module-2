const sumValues = (object) => {
  let sum = 0

  for (key in object) {
    sum += object[key]
  }

  return sum;
}

console.log(sumValues({})) // 0

console.log(sumValues({John: 100, Ann: 160, Pete: 130})) // 390

console.log(sumValues({manager: 300, salesman: 80, ["it helpdesk"]: 100})) // 480