// cara menggunakan switch dalam javascript
// hati hati terhadap tipe data gunakan  ParseInt untuk mengubah nilai didalam kondisi
// memiliki funsgi sama seperti if  yaitu perbandingan
var angka = prompt(
  "hari ini anda ingin makan apa? \n cnth: (Ayam geprek,nasi goreng,bakso)"
);

switch (angka) {
  case "Ayam geprek":
    alert("Makanan Tersedia!");
    break;
  case "nasi goreng":
    alert("Makanan tersedia!");
    break;
  case "bakso":
    alert("Makanan sedang kosong!");
    break;
  default:
    alert("Anda salah memasukan nama makanan");
}
