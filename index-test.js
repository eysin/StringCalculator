const Add = require('./index');

describe('Add', () => {
    it('Should take in a string and add two numbers, comma separated', () => {
        expect(Add("1,2")).toBe(3);
        expect(Add("")).toBe(0);
        expect(Add("1")).toBe(1);
    });
    it('Should take in an empty string and return 0', () => {
        expect(Add("")).toBe(0);
    });
    it('Should take in one number and return it', () => {
        expect(Add("1")).toBe(1);
    });
  });