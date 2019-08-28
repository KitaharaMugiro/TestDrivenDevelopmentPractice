import { GameCounter } from './GameCounter';
import { RockPaperScissor } from './RockPaperScissor';
import { Result } from "./Result";
import { Hand } from "./Hand";

export class ThreeGame {
    gameCounter = new GameCounter()
    specialRule : boolean = false

    getResult() {
        if(this.gameCounter.isP1Win()) return Result.p1Win
        else if(this.gameCounter.isP2Win()) return Result.p2Win
        else return Result.unjudge
    }

    set(p1Hand: Hand, p2Hand: Hand) {
        const r = new RockPaperScissor()
        const result = r.judge(p1Hand , p2Hand)
        this.gameCounter.count(result)
    }

    getP1Progress() {
        return this.gameCounter.getP1Progress()
    }

}