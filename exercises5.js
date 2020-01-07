function palindrome(kata) {
    if(kata.length === 0){
        return false
    }
  // you can only write your code here!
  var i = kata.length-1
      for(j=0; j<kata.length; j++){
          
         if(kata[i] === kata[j]){
                 i -= 1
                }
          else {
              return false
          }
      }
  return true
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister'));//false 
console.log(palindrome(""));// false