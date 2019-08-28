import { Result } from "./Result";
import { Hand } from "./Hand";

export class RockPaperScissor {
    specialRule: boolean = false;

    judge(p1Hand : Hand, p2Hand : Hand) {
        if(p1Hand === p2Hand) return Result.draw
        const resultNormal = this.judgeNormal(p1Hand , p2Hand)
        if(this.specialRule) {
            return Result.reverse(resultNormal)
        } else {
            return resultNormal
        }
    }

    private judgeNormal(p1Hand: Hand, p2Hand: Hand) {
        if(Hand.winHand(p1Hand) === p2Hand) {
            return Result.p1Win
        } else {
            return Result.p2Win
        }
    }
}