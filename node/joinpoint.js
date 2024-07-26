function calculateJoinPoint(s1, s2) {
    const MAX_LIMIT = 20000000;

    // Helper function to calculate the next number in the sequence
    function nextNumber(n) {
        let sumOfDigits = 0;
        let temp = n;
        while (temp > 0) {
            sumOfDigits += temp % 10;
            temp = Math.floor(temp / 10);
        }
        return n + sumOfDigits;
    }

    // Track the current numbers in both sequences
    let current1 = s1;
    let current2 = s2;

    // Iterate until the sequences converge or we reach the limit
    while (current1 !== current2) {
        if (current1 < current2) {
            current1 = nextNumber(current1);
        } else {
            current2 = nextNumber(current2);
        }

        // Check if we have exceeded the maximum limit
        if (current1 > MAX_LIMIT || current2 > MAX_LIMIT) {
            console.error("No join point found within the limit of 20,000,000.");
            return;
        }
    }

    return current1;
}


let s1 = 48;
let s2 = 54;
let result = calculateJoinPoint(s1, s2);
if (result !== undefined) {
    console.log(result);
}
