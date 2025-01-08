//setAttribute
//menambahkan atribut kedalam html

const judul = document.getElementsByTagName ('h1')[0];
//judul.setAttribute ('name', 'jawa');   //cara menambahkan atribut menggunakan setAttribute

const a = document.querySelector ('section#a a')

//getAttribute
//  cara melihat isi atribut html
//contoh
a.getAttribute ('href')     // mengambil isi link href tersebut

//removeAttribute
// cara menghapus isi atribut html secara langsung

a.removeAttribute ('href'); //menghapus isi link href tersebut