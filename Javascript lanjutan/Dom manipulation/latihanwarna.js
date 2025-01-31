const Button = document.getElementById("Tubahwarna"); //tangkap element
const body = document.body; //tangkap element yang ingin diubah

//membuat event ketika button diclick merubah warna menggunakan event handler
Button.onclick = function () {
    body.classList.toggle('biru-muda');  //penjelasan toggle dimanipmethod2
}

//membuat button baru di JS

const ButtonBaru = document.createElement('button'); //create element
const isi = document.createTextNode('warna acak?'); //crate text
ButtonBaru.appendChild(isi); //masukan teks ke button baru
// body.appendChild(ButtonBaru); //button baru dimasukan ke body
Button.setAttribute('type', 'button'); //mengatur type button
Button.after(ButtonBaru); //button baru dimasukan setelah button yang lama

//membuat fyungsi ketika button baru di click akan merubah warna background secara random

ButtonBaru.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
//math round digunakan untuk membulatkan angka
//math random digunakan untuk mengacak angka
// * 255 + 1 adalah sebuah rumus yg digunakan untuk mengacak angka dari 1 - 255
//' + r + ' adalah cara untuk menggabungkan string dengan variabel yang disebut operasi concatenation untuk
//menggabungkan string dengan variabel agar bisa dijadikan satu string


