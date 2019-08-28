import { ThreeGame } from './../../src/RockPaperScissor/ThreeGame';
import { RockPaperScissor } from './../../src/RockPaperScissor/RockPaperScissor';
import * as chai from 'chai';
import { Hand } from '../../src/RockPaperScissor/Hand';
import { Result } from '../../src/RockPaperScissor/Result';

describe('ジャンケン3本勝負のテスト',  () => {
    it('3回勝負でp1が勝利する', () => {  
        const game = new ThreeGame()
        game.set(Hand.paper , Hand.rock)
        game.set(Hand.paper , Hand.rock)
        game.set(Hand.paper , Hand.rock)
        const result = game.getResult()
        chai.assert.equal(result , Result.p1Win)
    })

    it('3回勝負でp2が勝利する', () => {  
        const game = new ThreeGame()
        game.set(Hand.rock , Hand.paper)
        game.set(Hand.rock , Hand.paper)
        game.set(Hand.rock , Hand.paper)
        const result = game.getResult()
        chai.assert.equal(result , Result.p2Win)
    })

    it('3回勝負で1回しか勝負していなければunjudge', () => {  
        const game = new ThreeGame()
        game.set(Hand.rock , Hand.paper)
        const result = game.getResult()
        chai.assert.equal(result , Result.unjudge)
    })

    it('途中経過を見ることができる', () => {  
        const game = new ThreeGame()
        game.set(Hand.rock , Hand.paper)
        chai.assert.deepEqual(game.getP1Progress() , {win:0 , lose:1, draw:0})

        game.set(Hand.rock , Hand.paper)
        chai.assert.deepEqual(game.getP1Progress() , {win:0 , lose:2, draw:0})

        game.set(Hand.paper , Hand.paper)
        chai.assert.deepEqual(game.getP1Progress() , {win:0 , lose:2, draw:1})

        game.set(Hand.paper , Hand.rock)
        chai.assert.deepEqual(game.getP1Progress() , {win:1 , lose:2, draw:1})
    })
})
