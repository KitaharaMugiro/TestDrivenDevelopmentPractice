enum Hand {
    rock = "rock",
    paper = "paper",
    scissor = "scissor"
}

namespace Hand {
    export function winHand(type: Hand) {
      switch(type) {
          case Hand.paper : return Hand.rock
          case Hand.rock : return Hand.scissor
          case Hand.scissor : return Hand.paper
      }
    }
  }
  
export {Hand}