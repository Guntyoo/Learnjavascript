//object dalam javascript
//definisi object secara simpel adalah "array yang lebih sakti"
// atau array yang meemiliki nama
// berikut bentuk implementasi

var siswa = {
    nama : "Agung",
    umur : "16",
    sekolah : "SMK Widya nusantara",
    sapa : function () {
        return "Hi " + "nama saya " + this.nama +
        " umur saya " + this.umur + " sekolah saya di " + this.sekolah;
    }
};
// variabel yang ada didalam object disebut properti
//function yang ada didalam object disebut method