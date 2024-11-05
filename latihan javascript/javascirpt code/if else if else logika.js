var jumlah = 10;
var Aktif = 6;
var lembur = 5;

for (var i = 1; i <= jumlah; i++) {
  if (i <= 6 && i !== 5 && i !== 3) {
    console.log("Angkot no " + i + " sedang beroperasi ");
  } else if (i === 8 || i === 10 || i === 5 || i === 3) {
    console.log("Angkot no " + i + " sedang lembur");
  } else console.log(" Angkot no " + i + " sedang tidak beroperasi");
}
