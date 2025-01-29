const Button = document.getElementById("Tubahwarna"); //tangkap element
const body = document.body; //tangkap element yang ingin diubah

//membuat event ketika button diclick merubah warna menggunakan event handler
Button.onclick = function () {
    body.classList.toggle('biru-muda');  //penjelasan toggle dimanipmethod2
}

//membuat button baru di JS

const ButtonBaru = document.createElement('button'); //create element
const isi = document.createTextNode('mau warna yang berbeda?');