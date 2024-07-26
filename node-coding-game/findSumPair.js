function findSumPair(numbers, k) {
    const indices = {};

    for (let i = 0; i < numbers.length; i++) {
        const complement = k - numbers[i];

        // Check if the complement exists in the hash table
        if (indices.hasOwnProperty(complement)) {
            return [indices[complement], i];
        }

        // Store the index of the current number
        indices[numbers[i]] = i;
    }

    return [0, 0];
}

// Example usage:
const numbers = [1, 5, 8, 1, 2];
const k = 13;
console.log(findSumPair(numbers, k)); // Output: [1, 2]
