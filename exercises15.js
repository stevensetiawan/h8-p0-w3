function groupAnimals(animals){
    for(j=0; j<animals.length;j++){
    for(i=0; i<animals.length-1; i++){
        if(animals[i]>animals[i+1]){
            var temp = animals[i]
            animals[i] = animals[i+1]
            animals[i+1] = temp    
            }
        }
    }
    var hasil = []
    var temp =[]
    for(k=0; k<animals.length-1; k++){
        if(animals[k][0]===animals[k+1][0]){
            temp.push(animals[k])
            temp.push(animals[k+1])
        }
        else if(animals[k][0]!==animals[k+1][0]){
                hasil.push(temp)
                temp =[]
                temp.push(animals[k+1])
        }    
    }
    hasil.push(temp)
    for(l=0; l<hasil.length; l++){
        if(hasil[l][0]===hasil[l][1]){
            hasil[l].shift()
        }
    }
    return hasil
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil','zebra','dorayaki','abang','cupu']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa','angsa', 'kancil', 'unta', 'cicak','uganda' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]