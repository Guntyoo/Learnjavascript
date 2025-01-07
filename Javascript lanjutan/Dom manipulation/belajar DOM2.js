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
//const p = document.querySelector("p");
//p.innerHTML = "ini diubah melalui javascript";
//hasilnya hanya bisa mengembalikan 1 elemen saja karena sifat dari QuerySelector itu sendiri hanya menerima 1 elemen
//maka dari itu gunakan querySelectorAll

const p = document.querySelectorAll ('p');
//sekarang semua p bisa diselector namun hasilnya bukanlah elemen melainkan NodeList
//tidak bisa digunakan langsung karena tidak memiliki index,tulis index atau gunakan loop untuk semua p
for (let i = 0; i < p.length; i++) {
  p[i].style.color = 'red';
};
//jika ingin satu saja maka input index dari elemen yang diubah
p[3].style.fontSize = '20px';

//dari segitu banyaknya selectionm= method bagaimana cara memilih nya sehingga bisa digunakan.
//gunakan sesuai kebutuhan dan ketepatan method yang digunakan contoh elementById dan elementbyTagName memiliki kecepatan yang lebih tinggi dibandingkan lainnya.
//Byid hanya bisa mengambil dari Id elemen TagName hanya bisa mengambil dari tag elemen Classname mengambil dari class eleemen.
//QuerySelector bisa digunakan dalam berbagai kondisi namun hanya biaa mengambil 1 elemen dan QuerySelectorAll sama.
//seperti QuerySelector namun bisa mengembalikan semua namun hasilnya node list dan harus dicari index elemen.
