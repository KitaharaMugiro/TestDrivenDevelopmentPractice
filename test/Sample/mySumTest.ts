import * as chai from 'chai';
import { mySum } from '../../src/Sample/mySum';
import { MySumClass } from '../../src/Sample/MySumClass';


describe('足し算のテスト',  () => {
    it('1 + 1 = 2', () => {  
        //arrange  
        const a = 1
        const b = 1
        const expectedAnswer = 2
        
        //act
        const result = mySum(a , b)

        //assert
        chai.assert.equal(result , expectedAnswer)
    })

    it('足し算クラスのテスト', () => {  
        //arrange  
        const a = 1
        const b = 1
        const expectedAnswer = 2
        
        //act
        const result = new MySumClass(a , b)

        //assert
        chai.assert.equal(result.getAnswer() , expectedAnswer)
    })
})