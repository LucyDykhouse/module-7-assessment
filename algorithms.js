// Question 1: add to zero

function addToZero(arr) {
    let status = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                status = true;
            }
        }
    }
    return status;
}

// Testing arrays
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// Time complexity
// O(n)

// Space complexity
// O(n)

