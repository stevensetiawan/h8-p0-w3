function split(word,separator1,separator2){
    var tampung =""
    var tampung2=[]
    for (i=0; i <word.length; i++){
    
        if(word[i]!== separator1){
            tampung += word[i]}
    
    else{
    tampung2.push(tampung)
    console.log(tampung2)
    tampung=""
    
    } 
   
    }
    tampung2.push(tampung)
    return tampung2;
    
}
console.log(split("godzila berjalan dengan lantang tapi","a","b"))
console.log(split("nama-saya|bram-hobi|main-game","-","|"))