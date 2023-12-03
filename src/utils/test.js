const grid = `
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
`

// Split the grid into lines
const lines = grid.trim().split("\n")

// Function to check if a character is a digit
const isDigit = (char) => /\d+/.test(char)

// Function to get the neighbors of '*'
const getStarNeighbors = (lines) => {
  const neighbors = []

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      if (lines[i][j] === "*") {
        // Check above, below, left, and right
        if (i > 0 && isDigit(lines[i - 1][j])) neighbors.push(lines[i - 1][j])
        if (i < lines.length - 1 && isDigit(lines[i + 1][j]))
          neighbors.push(lines[i + 1][j])
        if (j > 0 && isDigit(lines[i][j - 1])) neighbors.push(lines[i][j - 1])
        if (j < lines[i].length - 1 && isDigit(lines[i][j + 1]))
          neighbors.push(lines[i][j + 1])
      }
    }
  }

  return neighbors
}

const neighbors = getStarNeighbors(lines)
console.log(neighbors) // Output the neighbors of '*'
