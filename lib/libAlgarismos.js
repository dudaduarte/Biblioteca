const intToRomanUnit = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X'
}

const intToRomanDozens = {
    0: '',
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L',
    6: 'LX',
    7: 'LXX',
    8: 'LXXX',
    9: 'XC'
}

const intToRomanHundreds = {
    0: '',
    1: 'C',
    2: 'CC',
    3: 'CCC',
    4: 'CD',
    5: 'D',
    6: 'DC',
    7: 'DCC',
    8: 'DCCC',
    9: 'DM'
}

const intToRomanThousands = {
    0: '',
    1: 'M',
    2: 'MM',
    3: 'MMM',
    4: 'MMMM'
}

const romanToInt = () => {

}

const intToRoman = (num) => {
    let arrNum = num.toString().split('').map(num => Number(num));
    let numRoman;
    if (arrNum.length < 2) {
        numRoman = `${intToRomanUnit[num[0]]}`;
    } else if (arrNum.length < 3) {
        numRoman = `${intToRomanDozens[num[0]]}${intToRomanUnit[num[1]]}`
    } else if (arrNum.length < 4) {
        numRoman = `${intToRomanHundreds[num[0]]}${intToRomanDozens[num[1]]}${intToRomanUnit[num[2]]}`
    } else if (arrNum.length < 5) {
        numRoman = `${intToRomanThousands[num[0]]}${intToRomanHundreds[num[1]]}${intToRomanDozens[num[2]]}${intToRomanUnit[num[3]]}`
    } else {
        numRoman = 'Invalid number'
    }
    return numRoman;
}

module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;