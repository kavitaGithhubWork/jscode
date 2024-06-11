const numbers = [1, 45, 67, 23, 1, 7]

let highest = -Infinity;
let seconsHighest = -Infinity;

for(let i=0; i< numbers.length; i++){

    if(numbers[i]>highest){
        seconsHighest = highest;
        highest = numbers[i]

    }else if(numbers[i]>seconsHighest && numbers[i]!=highest){

        seconsHighest = numbers[i]
    }


}

console.log(seconsHighest)