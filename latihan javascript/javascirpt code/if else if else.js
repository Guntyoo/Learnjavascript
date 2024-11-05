var jumlah = 10;
var Aktif = 6;
var lembur = 8;

for (var i = 1; i <= jumlah; i++) {
  if (i <= Aktif) {
    console.log("Angkot no " + i + " sedang beroperasi ");
  } else if (i === lembur || i === 10 ) {
    console.log("Angkot no " + i + " sedang lembur");
  } else console.log(" Angkot no " + i + " sedang tidak beroperasi");
}
