//Create a function that removes duplicate values from an array.


function removeDuplicates (number) {
let newArray = []

for(let i = 0; i < number.length ; i ++){
    if(!newArray.includes(number[i])){
        newArray.push(number[i])
    }

    
}

return newArray
}

const input = [1,2,2,4,4,5]
console.log(removeDuplicates(input))