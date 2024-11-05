var b = 5 // jumlah baris
var hasil = "";
// buat baris
for (var row = 1; row <= b; row++) {
    //spasi 
    for ( var space = 0; space < b - row; space++) {
        hasil +=""
    }
    //buat pola
    for (var star = 0; star < row; star++) {
        //jika nilai star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya
        if (star >= 1) {
            hasil += "+"
        }
        // selain dari itu
        hasil += "*"
    }

    //print/tampilkan baris
    hasil += "\n"
}

console.log (hasil)