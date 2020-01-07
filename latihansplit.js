function pisah(arr, separator) {
    let hasil = []
    let temp = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === separator) {
            hasil.push(temp)
            temp = ''
        } else {
            temp += arr[i]
        }
    }
    hasil.push(temp)
    return hasil
}
console.log(pisah("godzila berjalan dengan lantang tapi","a"))
