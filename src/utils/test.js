function findRightmostNumber(inputString) {
    const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let rightmostIndex = -1;
    let rightmostNumber = null;

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

    return rightmostNumber;
}

// Example usage
console.log(findRightmostNumber("eightwo")); // Output: 'two'
console.log(findRightmostNumber("eightwone")); // Output: 'one'
console.log(findRightmostNumber("eightwone7")); // Output: '7'
console.log(findRightmostNumber("eightwone7dasdag")); // Output: '7'
