function pasanganTerbesar(num) {
  // you can only write your code here!
    var dummy=String(num)
    var hasil= dummy[0]+dummy[1]
  console.log(hasil)
  for(i=1; i<dummy.length-1; i++){
    if(dummy[i]+dummy[i+1]>hasil){
        hasil=dummy[i]+dummy[i+1]
    }
  }
  return hasil
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99