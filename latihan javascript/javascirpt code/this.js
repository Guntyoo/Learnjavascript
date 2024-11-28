//In JavaScript, the this keyword refers to an object.
//this memiliki fungsi yang sama dengan window?global
// berikut contoh implementasi
//this
console.log(this == window);
var a = 10;
//this menunjukan object key yang dituju
console.log(this.a);

//cth 1 menggunakan f declaration
function sapa () {
    console.log(this);
    console.log("Hallo!")
};
sapa();
//dalam function ini this mengembalikan object global

//cth 2  menggunakan objectliteral
var obj = {}; //dikemnalikan kesini
obj.halo = function () {
    console.log(this); //nilai ini
    console.log("halo!")
}
obj.halo();
//console.log(this) object  dikirim kembali ke yang bersangkutan

//cth 3 menggunakan object constructur f
function halo () {
    console.log (this);
    console.log('halo')
}
new halo();
//keyword new digunakan untuk membuat object instan dari salah satu constructur function
//object yang dituju oleh this itu adalah keyword new