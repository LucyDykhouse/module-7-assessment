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
console.log(`\n------- addToZero -------`);
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));

// Time complexity
// O(n^2)

// Space complexity
// O(n)



// Question 2: has unique characters

function hasUniqueChars(str) {
    let wordArray = str.split('');
    let comparisonChar = wordArray[0];
    for (let i = 1; i < wordArray.length; i++) {
        if (wordArray[i] === comparisonChar) {
          return false;
        } else {
          comparisonChar = wordArray[i];
        }
    }
    return true;
}

// Testing strings
console.log(`\n------- hasUniqueChars -------`);
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));

// Time complexity
// O(n^2)

// Space complexity
// O(n)



// Question 3: is panagram

function isPangram(str) {
    const alphabet = "abcdefghijklmnopqrstubwxyz";
    const lowercase = str.toLowerCase().split('');
    let status = false;

    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) === -1) {
            return status;
        }
    }

    return status = true;
}

// Testing strings
console.log(`\n------- isPangram -------`);
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));


// Time complexity
// O(n)

// Space complexity
// O(n)





