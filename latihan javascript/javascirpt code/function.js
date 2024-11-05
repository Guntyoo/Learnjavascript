// membuat function jumlahduavolumekubus
function jumlahduavolumekubus (a, b) {
    var volumeA;
    var volumeB;
    var total;
     volumeA = a * a * a;
     volumeB = b * b * b;
 total = volumeA + volumeB;
 return total;
}

// setelah membuat lalu panggil function yang ingin ditampilkan
console.log(jumlahduavolumekubus(8, 3));
console.log(jumlahduavolumekubus(5, 15));
