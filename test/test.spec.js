let chai = require("chai");
let expect = chai.expect;
let cpfFile = require('../lib/libCPF.js');
let CCFile = require('../lib/libCreditCard.js');
let algFile = require('../lib/libAlgarismos.js');

describe("Biblioteca CPF", () => {
    describe("função cpfValidator", () => {
        describe("cpfs válidos", () => {
            it("meu cpf", () => {
                expect(cpfFile.cpfValidator(41250735890)).to.equal(true);
            })
            it("cpf válido", () => {
                expect(cpfFile.cpfValidator("23560525420")).to.equal(true);
            })
            it("cpf válido", () => {
                expect(cpfFile.cpfValidator(40942348885)).to.equal(true);
            })
        })
        describe("cpfs INválidos", () => {
            it("cpf INválido", () => {
                expect(cpfFile.cpfValidator("40955548885")).to.equal(false);
            })
            it("cpf INválido", () => {
                expect(cpfFile.cpfValidator(12345678901)).to.equal(false);
            })
            it("cpf INválido", () => {
                expect(cpfFile.cpfValidator("98765432103")).to.equal(false);
            })
        })
    })
})

describe("Biblioteca Cartão de Crédito", () => {
    describe("função cardValidator", () => {
        describe("cartões válidos", () => {
            it("meu cartão virtual", () => {
                expect(CCFile.cardValidator(5502099757664036)).to.equal(true);
            })
            it("cartão válido aleatório", () => {
                expect(CCFile.cardValidator("4012001037141112")).to.equal(true);
            })
            it("cartão válido aleatório", () => {
                expect(CCFile.cardValidator("5442054108091705")).to.equal(true);
            })
            it("cartão válido aleatório", () => {
                expect(CCFile.cardValidator(30293810466644)).to.equal(true);
            })
            it("cartão válido aleatório", () => {
                expect(CCFile.cardValidator("6011137424214298")).to.equal(true);
            })
            it("cartão válido aleatório", () => {
                expect(CCFile.cardValidator(372181965977158)).to.equal(true);
            })
        })
        describe("cartões INválidos", () => {
            it("cartão INválido", () => {
                expect(CCFile.cardValidator(123456789012345)).to.equal(false);
            })
            it("cartão INválido", () => {
                expect(CCFile.cardValidator("2003004005060708")).to.equal(false);
            })
            it("cartão INválido", () => {
                expect(CCFile.cardValidator("472837284059123")).to.equal(false);
            })
            it("cartão INválido", () => {
                expect(CCFile.cardValidator(820170273045072)).to.equal(false);
            })
            it("cartão INválido", () => {
                expect(CCFile.cardValidator("5502199727664036")).to.equal(false);
            })
            it("cartão INválido", () => {
                expect(CCFile.cardValidator(4012001037141135)).to.equal(false);
            })
        })
    })
})

describe("Biblioteca Algarismos", () => {
    describe("Roman to Int", () => {
        it("5 to V", () => {
            expect(algFile.romanToInt('5')).to.equal("V");
        })
        it("26 to XXVI", () => {
            expect(algFile.romanToInt("26")).to.equal("XXVI");
        })
        it("19 to XIX", () => {
            expect(algFile.romanToInt("19")).to.equal("XIX");
        })
    })
    describe("Int to Roman", () => {
        it("5 to V", () => {
            expect(algFile.intToRoman("5")).to.equal("V");
        })
        it("26 to XXVI", () => {
            expect(algFile.intToRoman("26")).to.equal("XXVI");
        })
        it("19 to XIX", () => {
            expect(algFile.intToRoman("19")).to.equal("XIX");
        })
        it("398 to CCCXCVIII", () => {
            expect(algFile.intToRoman(398)).to.equal("CCCXCVIII");
        })
        it("4730 to MMMMDCCXXX", () => {
            expect(algFile.intToRoman("4730")).to.equal("MMMMDCCXXX");
        })
        it("5289 error", () => {
            expect(algFile.intToRoman("5289")).to.equal("The input should be a number between 1 and 4999");
        })
        it("4999 to MMMMCMXCIX", () => {
            expect(algFile.intToRoman("4999")).to.equal("MMMMCMXCIX");
        })
        it("0 error", () => {
            expect(algFile.intToRoman("0")).to.equal("The input should be a number between 1 and 4999");
        })
        it("476 to CDLXXVI", () => {
            expect(algFile.intToRoman(476)).to.equal("CDLXXVI");
        })
        it("0092 to XCII", () => {
            expect(algFile.intToRoman("0092")).to.equal("XCII");
        })
        it("000000000 invalid number", () => {
            expect(algFile.intToRoman("000000000")).to.equal("Invalid number");
        })
    })
})