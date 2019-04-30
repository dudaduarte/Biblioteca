const cardValidator = (num) => {

  let arrayNum = num.toString().split('').map(digit => Number(digit)).reverse();
  return formula(arrayNum);

};

const formula = (array) => {

  let result = array.reduce((acc, digit, index) => {

    if (index % 2 === 0) {

      return acc + digit;

    } else {

      return (digit * 2) > 9 ? acc + (digit * 2 - 9) : acc + digit * 2;

    }

  });

  return result % 10 === 0;

};

module.exports.cardValidator = cardValidator;