//  //remove card
// // const card = document.querySelector('.card');
// // const close = document.querySelector('.close');
// //     close.addEventListener('click', function () {
// //         card.remove(close);
// //     });


// //remove all card
// const close = document.querySelectorAll('.close');
// // for (let i = 0; close.length; i++) {
// //     close[i].addEventListener('click', function (e) {
// //         // close[i].parentElement.remove();
// //         e.target.parentElement.style.display = 'none';   //keduanya memiliki fungsi yang sama
// //     });
// // }

// close.forEach(function (el) {
//     el.addEventListener('click',function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); //mencegah aksi default 
//         e.stopPropagation(); //mencegah event bubbling
//     })
// })

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click',function (e) {
//         alert('ok');
//     })
// })

// //parantElement menampilkan parent dari element yang di cari
// //e.target menampilkan objek yang di klik

// //DOm traversal method (lihat gambar dom method di img!)
// const nama = document.querySelector('.nama');
// console.log(nama.parentElement);  //menampilkan parent dari element yang di cari
// console.log(nama.parentNode);  //menampilkan parent dari NODE yang di cari
// console.log(nama.nextElementSibling); //menampilkan element selanjutnya














//effiecency code karena dengan menaruh program dicontainer bukan di card jika ada perubahan card dalam html bisa langsung diubah tanpa dari script

const container = document.querySelector('.container');

container.addEventListener('click', function (e){
    console.log(e.target);
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})