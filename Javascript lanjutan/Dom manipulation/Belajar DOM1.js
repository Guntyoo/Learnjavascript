//DOM selection

//getElementById
//document.getElementById () -> element
const judul = document.getElementById("judul");
judul; //-> judul sudah berbentuk object

judul.style.color = "red";
judul.style.backgroundColor = "#ccc"; //gunakan chamelchasing (sambungkan dengan gunakan huruf besar)
judul.innerHTML = "Tyoo"; //mengubah teks html

//document.getelementsByTagName -> HTML collection bentuknya seperti array
const p = document.getElementsByTagName("p");
p[2].style.backgroundColor = "lightblue"; //karena ByTagName bersifat HTML collection bersifat seperti array

// jika ingin merubah semuanya gunakan looping

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0]; //walaupun h1 ini satu namun jika menggunakan tagname maka akan menjadi HTML collection
//[0] digunakan untuk menelusuri isi Tagname dan H1 berada di index 0 bisa digunakan seperti sebuah element.


//document.getElementByClassName ->HTML collection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "ini diubah dari javascript";
//bagaimana cara menulusuri element buka console ketik variabel yang sudah dibuat maka akan tampil seluruh
// isi element
