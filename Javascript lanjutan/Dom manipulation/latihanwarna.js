const Button = document.getElementById("Tubahwarna"); //tangkap element
const body = document.body; //tangkap element yang ingin diubah

//membuat event ketika button diclick merubah warna menggunakan event handler
Button.onclick = function () {
  body.classList.toggle("biru-muda"); //penjelasan toggle dimanipmethod2
};

//membuat button baru di JS

const ButtonBaru = document.createElement("button"); //create element
const isi = document.createTextNode("warna acak?"); //crate text
ButtonBaru.appendChild(isi); //masukan teks ke button baru
// body.appendChild(ButtonBaru); //button baru dimasukan ke body
Button.setAttribute("type", "button"); //mengatur type button
Button.after(ButtonBaru); //button baru dimasukan setelah button yang lama

//membuat fyungsi ketika button baru di click akan merubah warna background secara random

ButtonBaru.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
//math round digunakan untuk membulatkan angka
//math random digunakan untuk mengacak angka
// * 255 + 1 adalah sebuah rumus yg digunakan untuk mengacak angka dari 1 - 255
//' + r + ' adalah cara untuk menggabungkan string dengan variabel yang disebut operasi concatenation untuk
//menggabungkan string dengan variabel agar bisa dijadikan satu string

//membuat fungsi Kotak merah
const Merah = document.querySelector("input[name=sMerah]"); //cari input yang dia punya name sMerah
Merah.addEventListener("input", function () {
    const r = Merah.value;
        document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
});
const Hijau = document.querySelector("input[name=sHijau]");
Hijau.addEventListener("input", function () {
    const r = Merah.value;
        const g = Hijau.value;
            document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});
const Biru = document.querySelector("input[name=sBiru]");
Biru.addEventListener("input", function () {
    const r = Merah.value;
        const g = Hijau.value;
            const b = Biru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//input adalah sebuah event yang digunakan untuk mengambil inputan dari user
// value digunakn untuk mengambil nilai dari object yang telah dibuat dan di input dari user



//membuat sebuah event ketika mouse digerakkan akan merubah warna background
// 1. tangkap posisi mouse ketika digerakkan
document.body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);     // 2. tangkap sumbu x dan y yang digunakan sebagai parameter warna cth: console.log(event.clientX, event.clientY)
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);    // 3. ukuran browser digunakan sebagai patokan ukuran lebar dan tinggi x dan y
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});