var arr = [3,4,6,-5,1,-4,-1]
var sum = 0
for(let i=0 ; i<arr.length ; i++){
    if(arr[i] > 0){
        sum += arr[i]
    }
}
console.log("Sum is: "+sum)