let chai = require("chai");
let expect = chai.expect;
let CpfFile = require('../lib/libCPF.js');

describe("index lib", () => {
    describe("funcao digito 1", () => {
        it("teste1", () => {
            // o que vc espera que aconteça
            // no lugar do 1, colocar a função a ser testada e os seus parâmetros
            // ficaria expect(arquivoASerTestado.nomedafunção(paramentro1, parametro2))
            expect(CpfFile.cpfValidator("41250735890")).to.equal(9);
        })
    })
    describe("funcao digito 2", () => {
        it("teste1", () => {
            // o que vc espera que aconteça
            // no lugar do 1, colocar a função a ser testada e os seus parâmetros
            // ficaria expect(arquivoASerTestado.nomedafunção(paramentro1, parametro2))
            expect(CpfFile.secondVerificationNumber("41250735890")).to.equal(0);
        })
    })
})