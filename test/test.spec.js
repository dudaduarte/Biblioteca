let chai = require('chai');
let expect = chai.expect;
let cpfValidator = require('../lib/libCPF.js');

describe('Biblioteca CPF', () => {

  describe('função cpfValidator', () => {

    describe('cpfs válidos', () => {

      it('meu cpf', () => {

        expect(cpfValidator(41250735890)).to.equal(true);

      });
      it('meu cpf', () => {

        expect(cpfValidator('412.507.358-90')).to.equal(true);

      });
      it('cpf válido', () => {

        expect(cpfValidator('23560525420')).to.equal(true);

      });
      it('cpf válido', () => {

        expect(cpfValidator(40942348885)).to.equal(true);

      });
      it('cpf válido', () => {

        expect(cpfValidator('40942348885')).to.equal(true);

      });
    });
    describe('cpfs INválidos', () => {

      it('cpf INválido', () => {

        expect(cpfValidator('40955548885')).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator('123.456.789-01')).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator(98765432103)).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator('11111111111')).to.equal(false);

      });
      it('cpf INválido', () => {

        expect(cpfValidator('99999999999')).to.equal(false);

      });

    });

  });

});