import {Calculator } from './test.service'

describe('Calculator', ()=> {
    const calculator= new Calculator();
    it('should add 2 numbers',()=>{
        expect(calculator.add(2, 2)).toBe(4);
    })
    it('Should subtract 2 numbers', ()=> {
        expect(calculator.subtract(2, 2)).toBe(0);
    })
    it('should multiply 2 numbers',()=>{
        expect(calculator.multiply(2, 2)).toBe(4);
    })
})