const cpfValidator = (num) => {

  let arrayNum = num.split('');
  let verificationArr = arrayNum.splice(0, 9).map(n => Number(n));
  let lastTwoDigits = `${formula(10, verificationArr)}${lastVerificationNum(verificationArr)}`;

  return lastTwoDigits === arrayNum.join('') ? true : false;

};

const formula = (times, array) => {

  let result = 0;

  array.forEach(digit => result += digit * times--);

  let module11 = result % 11;
  let verificationNum = module11 < 2 ? 0 : 11 - module11;

  return verificationNum;

};

const lastVerificationNum = (array) => {

  array.push(formula(10, array));
  return formula(11, array);

};

module.exports = cpfValidator;