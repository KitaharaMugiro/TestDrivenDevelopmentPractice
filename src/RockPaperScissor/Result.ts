enum Result {
    p1Win = "p1Win",
    p2Win = "p2Win",
    draw = "draw",
    unjudge = "unjudge"
}

namespace Result {
    export function reverse(result : Result) {
        switch(result) {
            case Result.p1Win : return Result.p2Win
            case Result.p2Win : return Result.p1Win
            default: return result
        }

    }
}

export {Result}