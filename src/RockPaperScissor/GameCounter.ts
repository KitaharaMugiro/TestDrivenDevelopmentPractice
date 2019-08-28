import { Result } from "./Result";

export class GameCounter {
    getP1Progress() {
        return {win:this.p1WinCount , lose:this.p2WinCount, draw:this.drawCount}
    }
    count(result: Result) {
        switch(result) {
            case Result.p1Win : 
                this.p1WinCount += 1
                break
            case Result.p2Win : 
                this.p2WinCount += 1
                break
            case Result.draw : 
                this.drawCount += 1
                break
        }
    }

    isP2Win() {
        return this.p2WinCount >= 3
    }
    isP1Win() {
        return this.p1WinCount >= 3
    }
    p1WinCount : number = 0
    p2WinCount : number = 0
    drawCount : number = 0
}