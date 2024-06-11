
//merge two arrays
function mergeArray(arr1,arr2){

    const mergeArray = arr1.concat(arr2)

    mergeArray.sort()
        
    //     function(a,b){

    //     return a-b
    // })

    return mergeArray

}

arr1 = [1,2,3,4]
arr2 = [5, 6, 7]
console.log(mergeArray(arr1,arr2))
