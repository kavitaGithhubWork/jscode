//Write a function to find the largest
//Write a function to find the largest

const arr = [1, 34, 66, 24, 78, 23]

let largetnumber = arr[0]

for (let i= 1 ; i< arr.length ; i ++){
    if(arr[i]>largetnumber)
        {
            largetnumber = arr[i]
        } 


}

console.log(largetnumber)
