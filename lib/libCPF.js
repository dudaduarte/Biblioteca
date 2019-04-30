const cpfValidator = (num) => {

    let arrayNum = num.toString().split('');
    let arrFirst9 = arrayNum.splice(0, 9).map(digit => Number(digit));
    let lastTwoDigits = `${formula(10, arrFirst9)}${lastNumber(arrFirst9)}`;

    return lastTwoDigits === arrayNum.join('') ? true : false;

};

const formula = (times, array) => {

    let result = array.reduce((acc, digit) => acc + digit * times--, 0) % 11;
    let verificationNum = result < 2 ? 0 : 11 - result;

    return verificationNum;

};

const lastNumber = (array) => {

    array.push(formula(10, array));
    return formula(11, array);

};

module.exports.cpfValidator = cpfValidator;