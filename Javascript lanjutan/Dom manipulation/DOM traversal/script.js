 //remove card
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');
//     close.addEventListener('click', function () {
//         card.remove(close);
//     });


//remove all card
const close = document.querySelectorAll('.close');
for (let i = 0; close.length; i++) {
    close[i].addEventListener('click', function (e) {
        // close[i].parentElement.remove();
        e.target.parentElement.style.display = 'none';   //keduanya memiliki fungsi yang sama
    });
}

//parantElement menampilkan parent dari element yang di cari
//e.target menampilkan objek yang di klik