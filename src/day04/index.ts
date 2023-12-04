import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n").map((line) => line.trim())

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput)
    let sum = 0
    input.forEach((line) => {
        if (line === "") return

        const splitedX = line.split(":")
        const gameNumber = splitedX[0].split(" ")[1]
        const cards = splitedX[1].split(" | ")
        const cardsWinnerNumber = cards[0].trim().split(" ")
        const myNumber = cards[1].trim().split(" ")

        let firstCardWin = false
        let countOfShut = 0
        let _sum = 0
        let includes = []
        cardsWinnerNumber.forEach((card, index) => {

            if (card == '') return

            if (myNumber.includes(card)) {
              if (_sum === 0) {
                _sum = 1
              } else {
                _sum = _sum * 2
              }
            }
        })

       sum += _sum
    })


    return sum
}

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput)

    return
}

run({
    part1: {
        tests: [
            {
                input: `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11        
        `,
                expected: 13,
            },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            {
              input: `
Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11              
              `,
              expected: 30,
            },
        ],
        solution: part2,
    },
    trimTestInputs: true,
    onlyTests: true,
})
