const cpfValidator = (num) => {

  let numString = num.toString().replace(/\D/g,'');
  let lastTwoDigits = `${formula(10, 2, numString)}${formula(11, 1, numString)}`;

  return lastTwoDigits === numString.slice(-2);

}

const formula = (times, minor, string) => {
  let arrayNum = string.substr(0, string.length - minor).split('').map(Number);
  let result = arrayNum.reduce((acc, digit) => acc + digit * times--, 0) % 11;
  let verificationNum = result < 2 ? 0 : 11 - result;
  let arrEqual = arrayNum.every(v => v === arrayNum[0]);

  return arrEqual ? false : verificationNum;
  
}

module.exports = cpfValidator;