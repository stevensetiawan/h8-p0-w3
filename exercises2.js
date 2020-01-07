function balikstring(kata){
    var kata2=""
    for (i=kata.length-1; i>=0 ;i--){
        kata2 += kata[i]
    }
    return kata2
}
console.log(balikstring("permen bola bola"))