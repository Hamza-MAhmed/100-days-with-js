var arr = [1,3,5,1,7,3,9,5]
for(let i=0 ; i<arr.length-1 ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
        if(arr[i] == arr[j]){
            arr[j] = null
        }
    }
}
console.log("After removing duplicates the array is:")
for(let i=0 ; i<arr.length ; i++){
    if(arr[i] == null)
    continue;
    console.log(arr[i])
}