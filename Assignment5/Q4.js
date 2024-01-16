var str = ["string" , "level"]

for(let j=0 ; j<str.length ; j++){
    var newstr = ""
    for(let i=str[j].length-1 ; i>=0 ; i--){
    newstr += str[j].charAt(i)
    }
    if(str[j] == newstr){
        console.log("Word '"+str[j]+"' is palindrome")
    }
    else{
        console.log("Word '"+str[j]+"' is not palindrome")
    }
}
