function datahandling(data){
   hasil = ""
   hasil2=""
    for(i=0; i<data.length; i++){
        hasil = "Nomor ID : " + data[i][0] +"\n"+ "Nama lengkap : " + data[i][1]+"\n"+"TTL : " + data[i][2]+" "+data[i][3]+"\n"+"Hobi: " + data[i][4]+"\n"
        hasil2 += "\n" + hasil
    }
    return hasil2
}
console.log(datahandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]))