function targetTerdekat(arr) {
  // you can only write your code here!
  var tampung = 0
  var hasil = []
  for(i=0; i<arr.length; i++){
      if(arr[i]==='o'){
          tampung+=i         
      }   
    }
    for(j=0; j<arr.length; j++){
        if(arr[j]==='x'){
            hasil.push(Math.abs(tampung-j))
          }
      }
      for(k=0; k<hasil.length; k++){
        for(l=0; l<hasil.length-1; l++){
          if(hasil[l]>hasil[l+1]){
            temp=hasil[l]
            hasil[l]=hasil[l+1]
            hasil[l+1]=temp
            }
        }
    }
    if(hasil[0]===undefined){
        return 0
    }
      return hasil[0]
    }
    
  


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2