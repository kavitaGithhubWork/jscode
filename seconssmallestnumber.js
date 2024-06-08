const numbers = [2, 19, 81, 35, 29, 54, 93, 8, 1, 0];

let highest = -Infinity;
let secondHighest = numbers[i];

for (let i = 1; i< numbers.length ; i ++){

    if(numbers[i]<highest){

        secondHighest = highest
        highest = numbers[i]

    }else if(numbers[i]> highest && numbers[i]> secondHighest) {

        secondHighest = numbers[i]


    }

}








