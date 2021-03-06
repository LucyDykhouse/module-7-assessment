// Question 1: add to zero

function addToZero(arr) {
    let status = true;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return status;
            }
        }
    }
    return status = false;
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
// O(n^2)



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
// O(n^2)



// Question 3: is pangram

function isPangram(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
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



// Question 4: find longest word

function findLongestWord(arr) {
    let wordLength = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > wordLength) {
            wordLength = arr[i].length;
        }
    }

    return wordLength;
}

// Testing arrays
console.log(`\n------- findLongestWord -------`);
console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord(['hi', 'hello', 'howareyou', 'hello']));

// Time complexity
// O(n)

// Space complexity
// O(n)