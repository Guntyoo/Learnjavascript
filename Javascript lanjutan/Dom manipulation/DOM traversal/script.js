 //remove card
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
//     close.addEventListener('click', function () {
//         card.remove(close);
//     });


//remove all card
const close = document.querySelectorAll('.close');
// for (let i = 0; close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         // close[i].parentElement.remove();
//         e.target.parentElement.style.display = 'none';   //keduanya memiliki fungsi yang sama
//     });
// }

close.forEach(function (el) {
    el.addEventListener('click',function (e) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); //mencegah aksi default 
    })
})

//parantElement menampilkan parent dari element yang di cari
//e.target menampilkan objek yang di klik

//DOm traversal method (lihat gambar dom method di img!)
const nama = document.querySelector('.nama');
console.log(nama.parentElement);  //menampilkan parent dari element yang di cari
console.log(nama.parentNode);  //menampilkan parent dari NODE yang di cari
console.log(nama.nextElementSibling); //menampilkan element selanjutnya
//rest