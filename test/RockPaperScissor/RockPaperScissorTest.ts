import { RockPaperScissor } from './../../src/RockPaperScissor/RockPaperScissor';
import * as chai from 'chai';
import { mySum } from '../../src/Sample/mySum';
import { Hand } from '../../src/RockPaperScissor/Hand';
import { Result } from '../../src/RockPaperScissor/Result';

describe('RockPaperScissorのテスト',  () => {
    it('グーはチョキに勝つ', () => {  
        const p1 = Hand.rock
        const p2 = Hand.scissor
        const expected = Result.p1Win
        const game = new RockPaperScissor()
        const result = game.judge(p1 , p2)
        chai.assert.equal(result , expected)
    })

    it("グーはパーに負ける" , () => {
        const p1 = Hand.rock
        const p2 = Hand.paper
        const expected = Result.p2Win
        const game = new RockPaperScissor()
        const result = game.judge(p1 , p2)
        chai.assert.equal(result , expected)
    })

    it("グーはグーにあいこ" , () => {
        const p1 = Hand.rock
        const p2 = Hand.rock
        const expected = Result.draw
        const game = new RockPaperScissor()
        const result = game.judge(p1 , p2)
        chai.assert.equal(result , expected)
    })
})