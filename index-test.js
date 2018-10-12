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
    it('Runs 100 tests with random numbers in strings with a random length to test the function', () =>{
        for(let i = 0; i < 100; i ++){
            let stringBuilder = "";
            let currentTest = 0;
            for(let n = 0; n < (Math.floor(Math.random() * 100)); n++){
                let tempNumb = Math.floor(Math.random() * 100);
                currentTest += tempNumb;
                stringBuilder += (tempNumb.toString());
                if(Math.floor(Math.random() * 2) === 0){
                    stringBuilder += ",";
                }
                else{
                    stringBuilder += "\n";
                }
            }
            stringBuilder = stringBuilder.substring(0, stringBuilder.length - 1);
            expect(Add(stringBuilder)).toBe(currentTest);
        }
    });
    it('Tests the negative numbers and if it throws an excepction', () => {
        expect(function(){
            Add("1,4,5,-3,-4,77,-1")//I forgot to add this to it's own commit, this comment is to let git recognize it as changed
        }).toThrow();
    });
    it('Tests numbers over a thousand', () => {
        expect(Add('1001,2')).toBe(2);
    });
  });
  
  Math.floor(Math.random() * 100);