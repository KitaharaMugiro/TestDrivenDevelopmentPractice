import { RockPaperScissor } from './../../src/RockPaperScissor/RockPaperScissor';
import * as chai from 'chai';
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

    it("同じ手はあいこ" , () => {
        const hands = [Hand.rock , Hand.paper , Hand.scissor]
        hands.forEach(hand => {
            const expected = Result.draw
            const game = new RockPaperScissor()
            const result = game.judge(hand , hand)
            chai.assert.equal(result , expected)
        })
    })

    it("チョキはグーに負け、パーに勝つ" , () => {
        const p1 = Hand.scissor
        const p2WinHand = Hand.rock
        const p1WinHand = Hand.paper
        const game = new RockPaperScissor()

        const result1 = game.judge(p1 , p2WinHand)
        chai.assert.equal(result1 , Result.p2Win)
        
        const result2 = game.judge(p1 , p1WinHand)
        chai.assert.equal(result2 , Result.p1Win)
    })

    it("パーはグーに勝ち、チョキに負ける" , () => {
        const p1 = Hand.paper
        const p1WinHand = Hand.rock
        const p2WinHand = Hand.scissor
        const game = new RockPaperScissor()

        const result1 = game.judge(p1 , p1WinHand)
        chai.assert.equal(result1 , Result.p1Win)
        
        const result2 = game.judge(p1 , p2WinHand)
        chai.assert.equal(result2 , Result.p2Win)
    })

    it("負けるが勝ちの時はグーはチョキに負ける" , () => {
        const p1 = Hand.rock
        const p2 = Hand.scissor
        const expected = Result.p2Win
        const game = new RockPaperScissor()
        game.specialRule = true
        const result = game.judge(p1 , p2)
        chai.assert.equal(result , expected)
    })
})
