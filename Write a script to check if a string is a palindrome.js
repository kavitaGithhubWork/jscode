//Write a script to check if a string is a palindrome.

const inputStr = "nitin"

let newStr = inputStr.replace(/[^a-zA-Z0-9]/g,'')

let reverStr = newStr.split('').reverse().join('')

if(inputStr === reverStr){
    console.log('true')
    return true;
    
} else { 
    console.log('true')
    return false;
    
}
