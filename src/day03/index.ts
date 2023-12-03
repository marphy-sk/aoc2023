import run from "aocrunner"

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.trim())

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    const line = input[i]
    let regex = /\d+/g
    let match

    while ((match = regex.exec(line)) !== null) {
      const actualNumber = match[0]

      const indexOf = match.index
      const start = indexOf
      const _start = start - 1 < 0 ? 0 : start - 1
      const end = indexOf + actualNumber.toString().length

      const charOver: string[] = [line.slice(_start, end + 1)]

      // I need get line-1 and line+1 charts from start-1 to end+1
      const lineBefore = input[i - 1]
      const lineAfter = input[i + 1]
      if (lineBefore) {
        const lineBeforeChar = lineBefore.slice(_start, end + 1)
        charOver.push(lineBeforeChar)
      }
      if (lineAfter) {
        const lineAfterChar = lineAfter.slice(_start, end + 1)
        charOver.push(lineAfterChar)
      }
      // if in charOver have a non alfanumberich chart and .
      const containSpecialChar = charOver.join("").match(/[^a-zA-Z0-9.]/g)

      if (containSpecialChar) {
        // print line and actualNumber as red
        sum += parseInt(actualNumber)
      }
    }
  }
  return sum
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  let sum = 0
  const regex = /\*/g
  for (let i = 0; i < input.length; i++) {
    const line = input[i]
    const match = regex.exec(line)

    if (match) {
      const indexOf = match.index
      // I need get line-1 and line+1 and same line and get number before and after * and sum
      const lineBefore = input[i - 1]
      const lineAfter = input[i + 1]
      const lineCurrent = input[i]

      // get number can by [0-9+] neighbor of *
      const numberCurrentLineBefore = lineCurrent
        .slice(0, indexOf)
        .match(/\d+$/g)
      const numberCurrentLineAfter = lineCurrent
        .slice(indexOf + 1)
        .match(/^\d+/g)
      if (numberCurrentLineBefore && numberCurrentLineAfter) {
        sum +=
          parseInt(numberCurrentLineBefore[0]) *
          parseInt(numberCurrentLineAfter[0])
      }

      if (lineBefore && lineBefore.match(/\d+/g)) {
      }
    }
  }

  return sum
}

run({
  part1: {
    tests: [
      {
        input: `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..        
        `,
        expected: 4361,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598.. 
`,
        expected: 467835,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
})
