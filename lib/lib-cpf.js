const cpfValidator = (num) => {
  let arrayNum = num.toString().replace(/\D/g, '').split('').map(Number);
  let isEqual = arrayNum.every(digit => digit === arrayNum[0]);
  
  return isEqual ? false : verify(10, 9, arrayNum) === arrayNum[9] && verify(11, 10, arrayNum) === arrayNum[10];
};

const verify = (times, index, array) => {
  let arrayNum = array.slice(0, index);
  let result = arrayNum.reduce((acc, digit) => acc + digit * times--, 0) % 11;
  let verificationNum = result < 2 ? 0 : 11 - result;
  
  return verificationNum;
};

module.exports = cpfValidator;