//melanjutkan part 3 method pada array
// 6.for each
//bentuk pemanggilan foreach menjadi sebuah elemen berbeda dengan for index
//bentuk impelemen (var+foreach+(function(e)));
var num = [1, 2, 3, 4, , 5, 6, 7, 8];
num.forEach(function (e) {
  console.log(e);
});
//menambahkan index pada foreach seperti for
var nama = ["Pane", "raden", "jun"];
nama.forEach(function (e, i) {
  console.log("siswa ke " + (i + 1) + " bernama: " + e);
});

//7. map
//adalah method yang digunakan unruk mengembalikan/return sebuah value padaa array
//berikut bentuk implemen dari map
var num2 = [2, 4, 6, 8, 10];
var kali2 = num2.map(function (e) {
  return e * 2;
});
console.log(kali2.join("-"));

//8.sort
//mengurutkan value dari sebuah array
var angka = [1, 3, 4, 2, 5];
console.log(angka.join("-"));
angka.sort();
console.log(angka.join("-"));
//sort tidak bisa mengurutkan nilai puluhan secara otomatis maka gunakan function
var puluhan = [1, 10, 2, 3, 20, 8];
puluhan.sort(function (a, b) {
  return a - b;
});
console.log(puluhan.join("-"));
