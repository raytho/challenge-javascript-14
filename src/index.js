function diamond(size) {
  var draw = "";
  if (size > 0 && size % 2 == 0 && !size) {
    return `invalid number`;
  } else {
    for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
        for (let k = 0; k < size - i; k++) {
          draw += "\xa0";
        }

        for (let j = 0; j < i + 1; j++) {
          draw += "* ";
        }
        draw += " \n";
      }
    }

    for (let i = size; i >= 0; i--) {
      if (i % 2 === 0 || i === size) {
        for (let k = 0; k < size - i; k++) {
          draw += "\xa0";
        }

        for (let j = 0; j < i + 1; j++) {
          draw += "* ";
        }
        draw += " \n";
      }
    }
  }
  return draw;
}
console.log(diamond(5));
module.exports = { diamond };
