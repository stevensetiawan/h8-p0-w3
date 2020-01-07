function angkaPalindrome(num) {
    // you can only write   your code here!
    num+=1
    var j=num.toString().length-1;
    var i=0
    for(k=0; k<num.toString().length; k++){
    while(num.toString()[i]!==num.toString()[j]){num++}
        if(num.toString()[i]===num.toString()[j]){
        i++;
        j--;
        }
    }
    return num
  }
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(7146329898754935)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(12578903)); // 1001