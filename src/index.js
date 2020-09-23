const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const greenP = document.getElementById('greenP')
const yellowP = document.getElementById('yellowP')
const redP = document.getElementById('redP')
const greenC = document.getElementById('greenC')
const yellowC = document.getElementById('yellowC')
const redC = document.getElementById('redC')
const start = document.getElementById('start')

let numberP = 0
let numberC = 0
let count = {
  scorePlayer: 0,
  scoreComputer: 0
}

const randomFunction = () => {
  let numberPRandom = Math.floor(Math.random() * 3)
  return numberPRandom
}

const initialize = () => {
  rock.addEventListener('click', () => {
    select(0, randomFunction())
  })
  paper.addEventListener('click', () => {
    select(1, randomFunction())
  })
  scissors.addEventListener('click', () => {
    select(2, randomFunction())
  })

  toggleStart()
}
const startGame = () => {
  initialize()
}

const toggleStart = () => {
  if (start.classList.contains('hire')) {
    start.classList.remove('hire')
  } else {
    start.classList.add('hire')
  }
}
const reset = () => {
  startGame()
  return (numberP = 0), (numberC = 0)
}
const colors = () => {
  greenP.classList.add('green')
  greenC.classList.add('green')
  yellowC.classList.add('green')
}
const winTheComputer = () => {
  greenC.classList.remove('green')
  yellowC.classList.remove('yellow')
  redC.classList.remove('red')
  greenP.classList.remove('green')
  yellowP.classList.remove('yellow')
  redP.classList.remove('red')

  console.log('computador gano')
}
const winThePlayer = () => {
  greenP.classList.remove('green')
  yellowP.classList.remove('yellow')
  redP.classList.remove('red')
  greenC.classList.remove('green')
  yellowC.classList.remove('yellow')
  redC.classList.remove('red')
  console.log('Jugador gano')
}

const select = (playernumberP, computernumberP) => {
  switch (playernumberP) {
    case 0:
      switch (computernumberP) {
        case 1:
          count.scoreComputer = count.scoreComputer + 1
          console.log(count.scoreComputer)
          if (count.scoreComputer === 1) {
            greenC.classList.add('green')
          } else if (count.scoreComputer === 2) {
            greenC.classList.add('green')
            yellowC.classList.add('yellow')
          }

          if (count.scoreComputer === 3) {
            greenC.classList.add('green')
            yellowC.classList.add('yellow')
            redC.classList.add('red')

            setTimeout(() => {
              winTheComputer()
            }, 2000)

            return (count.scoreComputer = 0), (count.scorePlayer = 0)
          }
          break
        case 2:
          count.scorePlayer = count.scorePlayer + 1
          console.log(count.scorePlayer)
          if (count.scorePlayer === 1) {
            greenP.classList.add('green')
          } else if (count.scorePlayer === 2) {
            greenP.classList.add('green')
            yellowP.classList.add('yellow')
          }
          if (count.scorePlayer === 3) {
            greenP.classList.add('green')
            yellowP.classList.add('yellow')
            redP.classList.add('red')

            setTimeout(() => {
              winThePlayer()
            }, 2000)
            return (count.scoreComputer = 0), (count.scorePlayer = 0)
          }
          break
        default:
          break
      }
      break
    case 1:
      switch (computernumberP) {
        case 0:
          count.scorePlayer = count.scorePlayer + 1
          console.log(count.scorePlayer)
          if (count.scorePlayer === 1) {
            greenP.classList.add('green')
          } else if (count.scorePlayer === 2) {
            greenP.classList.add('green')
            yellowP.classList.add('yellow')
          }
          if (count.scorePlayer === 3) {
            greenP.classList.add('green')
            yellowP.classList.add('yellow')
            redP.classList.add('red')

            setTimeout(() => {
              winThePlayer()
            }, 2000)
            return (count.scoreComputer = 0), (count.scorePlayer = 0)
          }

          break
        case 2:
          count.scoreComputer = count.scoreComputer + 1
          console.log(count.scoreComputer)
          if (count.scoreComputer === 1) {
            greenC.classList.add('green')
          } else if (count.scoreComputer === 2) {
            greenC.classList.add('green')
            yellowC.classList.add('yellow')
          }

          if (count.scoreComputer === 3) {
            greenC.classList.add('green')
            yellowC.classList.add('yellow')
            redC.classList.add('red')

            setTimeout(() => {
              winTheComputer()
            }, 2000)

            return (count.scoreComputer = 0), (count.scorePlayer = 0)
          }

          break
        default:
          break
      }
      break
    case 2:
      switch (computernumberP) {
        case 0:
          count.scorePlayer = count.scorePlayer + 1
          console.log(count.scorePlayer)
          if (count.scorePlayer === 1) {
            greenP.classList.add('green')
          } else if (count.scorePlayer === 2) {
            greenP.classList.add('green')
            yellowP.classList.add('yellow')
          }
          if (count.scorePlayer === 3) {
            greenP.classList.add('green')
            yellowP.classList.add('yellow')
            redP.classList.add('red')

            setTimeout(() => {
              winThePlayer()
            }, 2000)
            return (count.scoreComputer = 0), (count.scorePlayer = 0)
          }

          break
        case 1:
          count.scoreComputer = count.scoreComputer + 1
          console.log(count.scoreComputer)
          if (count.scoreComputer === 1) {
            greenC.classList.add('green')
          } else if (count.scoreComputer === 2) {
            greenC.classList.add('green')
            yellowC.classList.add('yellow')
          }

          if (count.scoreComputer === 3) {
            greenC.classList.add('green')
            yellowC.classList.add('yellow')
            redC.classList.add('red')

            setTimeout(() => {
              winTheComputer()
            }, 2000)

            return (count.scoreComputer = 0), (count.scorePlayer = 0)
          }

          break
        default:
          break
      }
      break
    default:
      break
  }
}

// class Player {
//   constructor (numberP) {
//     this.numberP = numberP
//   }
//   handleClickRock () {
//     this.select(0)
//   }
//   handleClickPaper () {
//     this.select(1)
//   }
//   handleClickScissors () {
//     this.select(2)
//   }
//   select (numberP) {
//     this.hola(numberP)
//   }
//   counter = numberP => {
//     let count = numberP
//     return {
//       value: count,
//       increase: () => {
//         count = count + 1
//         if (count === 3) {
//           console.log('Win the Computer')
//           return (count = 0)
//         } else {
//           console.log(count)
//           return count
//         }
//       },
//       getCount: () => {
//         return count
//       }
//     }
//   }
//   hola (num) {
//     const numRandom = Math.floor(Math.random() * 3)
//     const score = this.counter(this.numberP)
//     switch (num) {
//       case 0:
//         switch (numRandom) {
//           case 1:
//             break
//           case 2:
//             break
//           default:
//             break
//         }
//         break
//       case 1:
//         switch (numRandom) {
//           case 0:
//             console.log('gana el jugador roca')
//             break
//           case 2:
//             console.log('gana el computador tijeras')
//             break
//           default:
//             console.log('Vuelve a intentarlo')
//             break
//         }
//         break

//       case 2:
//         switch (numRandom) {
//           case 1:
//             console.log('gana el jugador papel')
//             break
//           case 0:
//             console.log('gana el computador roca')
//             break
//           default:
//             console.log('Vuelve a intentarlo')
//             break
//         }
//         break
//     }
//   }

//   winTheComputer = num => {
//     let count = num
//     return {
//       increase: () => {
//         count = count + 1
//       },
//       getCount: () => {
//         return count
//       }
//     }
//   }
//   result () {
//     const res = this.winTheComputer(1)
//     const r = res.increase()
//     console.log(res.getCount())
//     return res.getCount()
//   }
// }
// const player = new Player(0)
// const numberP = 0

// const counter = num => {
//   let count = num
//   return {
//     increase: () => {
//       count = count + 1
//       if (count === 3) {
//         console.log('win computer')
//         return (count = 0)
//       } else {
//         console.log(count)
//         return count
//       }
//     },
//     getCount: () => {
//       return count
//     }
//   }
// }
// const result = counter(numberP)

// rock.addEventListener('click', () => {
//   result.increase()
// })

// console.log(result.getCount())
