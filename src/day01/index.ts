import run from "aocrunner"
import _ from "lodash"

const parseInput = (rawInput: string) => rawInput.split("\n").map((line) => line.trim())

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  // string to array
  const result: string[] = []
  // get first numeric chart and last numberic chart every line and sum them
  input.forEach((line) => {
    const firstNumber = line.match(/\d/); // Find the first number
    const lastNumber = line.match(/\d(?![^\n]*\d)/); // Find the last number
    if (firstNumber && lastNumber) {
      result.push(`${firstNumber[0]}${lastNumber[0]}`)
    }
  })

    // sum all result
  return result.reduce((a, b) => parseInt(String(a)) + parseInt(b), 0)
}

function convertNumberWordsToDigits(text: string) {
  return text.replace(/one|two|three|four|five|six|seven|eight|nine/gi, function(matched: string) {
      return numberWordsToDigits[matched.toLowerCase()];
  });
}

const numberWordsToDigits: {[key: string]: string} = {
  nine: '9', eight: '8', seven: '7', six: '6',
  five: '5', four: '4', three: '3', two: '2', one: '1'
};

function findRightmostNumber(inputString: string): string {
  const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let rightmostIndex = -1;
  let rightmostNumber: string | number = '';

  // Check for number words
  for (const word of numberWords) {
    const index = inputString.lastIndexOf(word);
    if (index !== -1 && (rightmostIndex === -1 || index > rightmostIndex)) {
      rightmostIndex = index;
      rightmostNumber = word;
    }
  }

  // Check for digits
  for (let i = 0; i <= 9; i++) {
    const digit = i.toString();
    const index = inputString.lastIndexOf(digit);
    if (index !== -1 && (rightmostIndex === -1 || index > rightmostIndex)) {
      rightmostIndex = index;
      rightmostNumber = digit;
    }
  }

  return numberWordsToDigits[rightmostNumber] || rightmostNumber
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const result: string[] = []
  // get first numeric chart and last numberic chart every line and sum them
  input.forEach((line) => {
    const firstNumber = convertNumberWordsToDigits(line).match(/\d/); // Find the first number
    const lastNumber = findRightmostNumber(line); // Find the last number

    if (firstNumber && lastNumber) {
      result.push(`${firstNumber[0]}${lastNumber}`)
    }
  })

  let sum = 0
  result.forEach((number) => {
    sum += parseInt(number)
  })

  // sum all result
  return sum
}

run({
  part1: {
    tests: [
      {
        input: `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
        `,
        expected: 142,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input:
`
eight1qlfzvdtseven1threefour
5slbnsevenmz
8sixnzfctpblt
xthzlbsjvz4dlg9fiveseven7seven
fzqeightwothree1qhjtmfdsmsf
74ninesixfivermkvh
five7xshrvvxbjtwo
22threepdtqbceightninesevenvrsct
4ttbxqm76fiveqcpdptn2
five3nrftzlzrqpkrxgtwoqplpgf
`,
        expected: 603,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
