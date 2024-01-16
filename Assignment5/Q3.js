var sentence = "my name is hamza ahmed"
var result = ""
for(let i=0 ; i<sentence.length ; i++){
    if(i==0 || (i>0 && sentence.charAt(i-1)==" ")){
        result += sentence.charAt(i).toUpperCase()
    }
    else{
        result += sentence.charAt(i)
    }
}
console.log(result)