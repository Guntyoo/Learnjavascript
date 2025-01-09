//setAttribute
//menambahkan atribut kedalam html

const judul = document.getElementsByTagName ('h1')[0];
//judul.setAttribute ('name', 'jawa');   //cara menambahkan atribut menggunakan setAttribute namin sifatnya menimpa

const a = document.querySelector ('section#a a')

//getAttribute
//  cara melihat isi atribut html
//contoh
a.getAttribute ('href')     // mengambil isi link href tersebut

//removeAttribute
// cara menghapus isi atribut html secara langsung

a.removeAttribute ('href'); //menghapus isi link href tersebut

//Atribut classList 
// ada berbagao macam Class list

//atribute.classList.add()

const p2 = document.querySelector ('.p2');

//clasList.add ()
//ada berbagai macam dan method yang penting untuk dipahami

p2.classList.add("label");
p2.classList.add("satu");
p2.classList.add("dua");           //menambah class tanpa menimpa class sebelum nya
p2.classList.remove("label");       //menghapus class elemen html
p2.classList.toggle("label");       //toggle berfungsi jika class yang ingin di tambahkan tidak ada maka class 
// ditambahkan sedangkan jika class sudah ada tanpa ditambah lewat toggle maka  class akan dihapus
p2.classList.item("1");             //melihat class dengan cara menginput index class
p2.classList.contains("satu");      //melihat class secara langsung dengan menyebut nama class dikembalikan nilai boolean
p2.classList.replace("dua", "tiga"); //mengganti class sebelumnya diganti dengan baru
