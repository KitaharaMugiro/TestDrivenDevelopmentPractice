import * as chai from 'chai';
import { fizzBuzz } from '../../src/FizzBuzz/fizzBuzz';

describe('fizzBuzzのテスト',  () => {
    it('3と5の倍数でない数字を入力すると、その数字の文字列が返ってくる', () => {  
        //arrange
        const inputs = [1 , 2]
        const expecteds = ["1" , "2"] 

        //act
        for(var i = 0 ; i < inputs.length ; i++) {
            const actual = fizzBuzz(inputs[i])
            chai.assert.equal(actual , expecteds[i])
        }
    })

    it('3の倍数を入力するとfizzが返ってくる', () => {  
        //arrange
        const inputs = [3 , 6]
        const expecteds = ["fizz" , "fizz"] 

        //act
        for(var i = 0 ; i < inputs.length ; i++) {
            const actual = fizzBuzz(inputs[i])
            chai.assert.equal(actual , expecteds[i])
        }
    })

    it('5の倍数を入力するとbuzzが返ってくる', () => {  
        //arrange
        const inputs = [5 , 10]
        const expecteds = ["buzz" , "buzz"]

        //act
        for(var i = 0 ; i < inputs.length ; i++) {
            const actual = fizzBuzz(inputs[i])
            chai.assert.equal(actual , expecteds[i])
        }
    })

    it('15の倍数を入力するとfizzbuzzが返ってくる', () => {  
        //arrange
        const inputs = [15 , 30]
        const expecteds = ["fizzbuzz" , "fizzbuzz"]

        //act
        for(var i = 0 ; i < inputs.length ; i++) {
            const actual = fizzBuzz(inputs[i])
            chai.assert.equal(actual , expecteds[i])
        }
    })

    it('7の倍数を入力するとkuzzが返ってくる', () => {  
        //arrange
        const inputs = [7 , 14]
        const expecteds = ["kuzz" , "kuzz"]

        //act
        for(var i = 0 ; i < inputs.length ; i++) {
            const actual = fizzBuzz(inputs[i])
            chai.assert.equal(actual , expecteds[i])
        }
    })


})