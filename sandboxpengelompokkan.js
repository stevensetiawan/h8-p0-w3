function initialGrouping(studentsArr) {
    var result=[];
    for (var i=0; i<studentsArr.length; i++){
        var hasil=[];
        var awal= studentsArr[i][0];
        console.log(awal)
        var urutan=0;
        console.log(urutan)
        for(var j=studentsArr.length-1; j>i; j--){
          if(awal===studentsArr[j][0]){
            urutan += 1
            console.log(urutan)
            studentsArr.splice(j,1);
            console.log(studentsArr)
          }
          console.log(studentsArr)
          console.log(urutan)
          console.log(hasil)
          console.log(awal)
        }
        hasil.push(awal)
        hasil.push(urutan)
        result.push(hasil)
    }
      return result
    }
    
    console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
    /*
    [
      [ 'B', 'Budi', 'Badu' ],
      [ 'J', 'Joni', 'Jono' ]
    ]
    */
    
    console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
    /*
    [
      [ 'M', 'Mickey' ],
      [ 'Y', 'Yusuf' ],
      [ 'D', 'Donald' ],
      [ 'A', 'Ali' ],
      [ 'G', 'Gong' ]
    ]
    */
    
    console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
    /*
    [
      [ 'R', 'Rock', 'Rocker' ],
      [ 'S', 'Stone', 'Sticker' ],
      [ 'B', 'Brick' ]
    ]
    */