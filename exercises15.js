function groupAnimals(animals){
for(j=0; j<animals.length; j++){
   for(i=0; i<animals.length-1; i++){
       if(animals[i][0]>animals[i+1][0]){
           temp=animals[i+1]
           animals[i+1]=animals[i]
           animals[i]=temp
       }
   }
}
var hasil=[[animals[0]]]
var index=0
for(k=1; k<animals.length; k++){
    if(hasil[index][0][0]===animals[k][0]){
        hasil[index].push(animals[k])
    }
    else if(hasil[index][0]!==animals[k][0])
        { hasil.push([animals[k]])
        index++
        }
    }
return hasil
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]