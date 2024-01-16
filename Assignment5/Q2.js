var count = 0
var str = "string"

for(let i=0 ; i<str.length ; i++){
    if (str.substring(i,i+1).includes('a') || str.substring(i,i+1).includes('e') || str.substring(i,i+1).includes('i') ||
     str.substring(i,i+1).includes('o') || str.substring(i,i+1).includes('u')){
        count++
    }
}
console.log("Total no of vowels in 'string' is "+count)