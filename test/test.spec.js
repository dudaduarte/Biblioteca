let chai = require('chai');
let expect = chai.expect;
let cpfValidator = require('../lib/lib-cpf.js');

describe('Biblioteca CPF', () => {

  describe('cpfs válidos', () => {

    it('meu cpf número', () => {

      expect(cpfValidator(41250735890)).to.equal(true);

    });
    it('meu cpf string + ponto e traço', () => {

      expect(cpfValidator('412.507.358-90')).to.equal(true);

    });
    it('cpf válido string', () => {

      expect(cpfValidator('23560525420')).to.equal(true);

    });
    it('cpf válido número', () => {

      expect(cpfValidator(40942348885)).to.equal(true);

    });
    it('cpf válido string + ponto e traço', () => {

      expect(cpfValidator('409.423.488-85')).to.equal(true);

    });
    
  });
  describe('cpfs inválidos', () => {

    it('cpf inválido', () => {

      expect(cpfValidator('40955548885')).to.equal(false);

    });
    it('cpf inválido', () => {

      expect(cpfValidator('123.456.789-01')).to.equal(false);

    });
    it('cpf inválido', () => {

      expect(cpfValidator(98765432103)).to.equal(false);

    });
    it('cpf inválido (todos os digitos iguais)', () => {

      expect(cpfValidator('11111111111')).to.equal(false);

    });
    it('cpf inválido (todos os dígitos iguais + pontos e traço', () => {

      expect(cpfValidator('999.999.999-99')).to.equal(false);

    });

  });

});