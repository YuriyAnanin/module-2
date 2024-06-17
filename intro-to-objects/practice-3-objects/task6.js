const multiplyNumeric = (object) => {
  for (key in object) {
    if (!isNaN(object[key])) {
      object[key] *= 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// after the call
console.log(menu);
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
