function countCharacters(stringInput) {
    let count = {};

    for (let i = 0; i < stringInput.length; i++) {
        let char = stringInput[i];
        console.log (char)
        if (count[char]) {
            count[char]++;
            console.log(count[char])
        } else {
            count[char] = 1;
        }
    }

    return count;
}

const input = "hellllo";
console.log(countCharacters(input));
