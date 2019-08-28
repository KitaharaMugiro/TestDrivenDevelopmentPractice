import * as chai from 'chai';
import { WordCounter } from '../../src/WordCounter/WordCounter';


describe('WordCounterのテスト',  () => {
    //文字列を入れると{文字:数字}のオブジェクトが返ってくる
    it('aを入れたら{a:1}が返ってくる', () => {  
        //arrange  
        const text = "a"
        const expected= {a:1}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    //異なる文字列は異なるKeyで管理される
    it('a bを入れたら{a:1 , b:1}が返ってくる', () => {  
        //arrange  
        const text = "a b"
        const expected= {a:1, b:1}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    //同じ文字はまとめられてValueで個数を表現する
    it('a b aを入れたら{a:2 , b:1}が返ってくる', () => {  
        //arrange  
        const text = "a b a"
        const expected = {a:2,b:1}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    //空白は文字としてカウントしない
    it('a   aを入れたら{a:2}が返ってくる', () => {  
        //arrange  
        const text = "a    a"
        const expected= {a:2}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    it('    を入れたら{}が返ってくる', () => {  
        //arrange  
        const text = "    "
        const expected= {}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    it('空の文字列を入れたら{}が返ってくる', () => {  
        //arrange  
        const text = ""
        const expected= {}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    //ピリオドは除いてカウントする
    it('I like it.を入れたら{I:1,like:1,it:1}が返ってくる', () => {  
        //arrange  
        const text = "I like it."
        const expected= {i:1,like:1,it:1}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })

    //大文字は小文字に直して数える
    it('Cake is cake.を入れたら{cake:2,is:1}が返ってくる', () => {  
        //arrange  
        const text = "Cake is cake."
        const expected= {cake:2,is:1}
        
        //act
        const counter = new WordCounter()
        const result = counter.getCount(text)

        //assert
        chai.assert.deepEqual(result , expected)
    })
})