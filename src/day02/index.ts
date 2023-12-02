import run from "aocrunner"

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.trim())

const definitionRule = {
  red: 12,
  green: 13,
  blue: 14,
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let sum = 0
  input.forEach((line) => {
    if (line === "") return

    const splitedX = line.split(":")
    const gameNumber = splitedX[0].split(" ")[1]

    let gamePossible = true
    const splitedY = splitedX[1].split(";")
    splitedY.forEach((game) => {
      const splitedZ = game.split(",")
      splitedZ.forEach((color) => {
        const colorName = color.trim().split(" ")[1]
        const colorNumber = color.trim().split(" ")[0]

        if (definitionRule[colorName] < parseInt(colorNumber) && gamePossible) {
          gamePossible = false
        }
      })
    })

    if (gamePossible) {
      sum += parseInt(gameNumber)
    }
  })

  return sum
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  let sum = 0
  input.forEach((line) => {
    if (line === "") return

    const splitedX = line.split(":")
    const gameNumber = splitedX[0].split(" ")[1]

    const gameSum = {
      red: 0,
      green: 0,
      blue: 0,
    }

    const splitedY = splitedX[1].split(";")
    splitedY.forEach((game) => {
      const splitedZ = game.split(",")
      splitedZ.forEach((color) => {
        const colorName = color.trim().split(" ")[1]
        const colorNumber = color.trim().split(" ")[0]

        if (gameSum[colorName] < parseInt(colorNumber)) {
          gameSum[colorName] = parseInt(colorNumber)
        }
      })
    })

    if (gameSum.red === 0) {
      gameSum.red = 1
    }
    if (gameSum.green === 0) {
      gameSum.green = 1
    }
    if (gameSum.blue === 0) {
      gameSum.blue = 1
    }

    sum += gameSum.red * gameSum.green * gameSum.blue
  })

  return sum
}

run({
  part1: {
    tests: [
      {
        input: `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green        
        `,
        expected: 8,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
              `,
        expected: 2286,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
