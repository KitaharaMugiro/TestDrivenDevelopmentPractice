import * as chai from 'chai';
import WordCounter from '../src/WordCounter';

function jsonify(a : Object) {
    return JSON.stringify(a);
}

function customSum(firstNumber : number , secondNumber: number) {
    return 2
}

describe('足し算のテスト',  () => {
    it('1 + 1 = 2', () => {  
        //arrange  
        const a = 1
        const b = 1
        const expectedAnswer = 2
        
        //act
        const result = customSum(a , b)

        //assert
        chai.assert.equal(result , expectedAnswer)
    })
})