//Document.querySelector() -> Element
//bagaimana cara querySelector bekerja? sama seperti cara css yang memilih sebuah elemen html dalam css
//apa yang dihasilkan querySelector yaitu sebuah elemen baru

//bagaimana cara kita menggunakan selector(cek file html)

//bagaimana bentuk implementasi dari querySelector
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "30px";

const li3 = document.querySelector("section#b ul li:nth-child(3)");
li3.style.color = "blue";

//bagaimana jika querySelector menerima banyak elemen?
const p = document.querySelector("p");
p.innerHTML = "ini diubah melalui javascript";
//hasilnya hanya bisa mengembalikan 1 elemen saja karena sifat dari QuerySelector itu sendiri hanya menerima 1 elemen
