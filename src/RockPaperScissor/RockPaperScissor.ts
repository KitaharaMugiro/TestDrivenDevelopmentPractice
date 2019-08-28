import { Result } from "./Result";
import { Hand } from "./Hand";

export class RockPaperScissor {
    judge(p1Hand : Hand, p2Hand : Hand) {
        if(p1Hand === Hand.rock && p2Hand === Hand.scissor) {
            return Result.p1Win
        } else if(p1Hand === Hand.rock && p2Hand === Hand.paper){
            return Result.p2Win
        } else {
            return Result.draw
        }
    }
}