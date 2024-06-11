//Write a function to sort an array of numbers

function sortNumber(numbers){

    numbers.sort( function(a , b) {

        return a-b;
    } )

    return numbers}

// Example usage:
const numbers = [3, 1, 8, 2, 5];
const sortedNumbers = sortNumber(numbers);
console.log("Sorted numbers:", sortedNumbers);
