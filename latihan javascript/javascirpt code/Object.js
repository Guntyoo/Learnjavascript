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

//4 cara membuat object yaitu: objectliteral,function declaration,constructur Function,(keyword new), dan object.create()
//berikut bentuk implemen dari berbagai method
// 1.object literal
// deklarasikan key dan nama secara langsung
var siswa = {
    nama : "Alfaroji",
    umur : "16",
    sekolah : "SMK Widya nusantara",
    sapa : function () {
        return "Hi " + "nama saya " + this.nama +
        " umur saya " + this.umur + " sekolah saya di " + this.sekolah;
    }
};

// 2.function declaration
//key dimasukan dalam parameter lalu deklarasikan
//keunggulan function declaration menambahkan efektivitas code namun masi belum terlalu bagus
function buatobject (nama,umur,sekolah) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.sekolah = sekolah;
    return mhs;
}
// cara memanggil function object yang dibuat,Sesuaikan dengan index nya
console.log(buatobject("Agung",16,"SMK widya nusantara"));


//3.Constructur function
//memiliki penulisan yang mirip dengan no 2 namun efektivitas nya lebih bagus
//nama depan function dibuat kapital sebagai penanda
function Siswa (nama,umur,sekolah) {
    this.nama;
    this.umur;
    this.sekolah;
}
// untuk cara memanggil constructur function
// Keyword NEW menandakan constructur function jika tidak memasuka keyword new maka js mengenalkan sebagai constructur
 var siswa3 = new siswa ('kitting',17,'SMK widya nusantara');