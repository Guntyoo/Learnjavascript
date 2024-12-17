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

//bagaimana cara menulusuri element buka console ketik variabel yang sudah dibuat maka akan tampil seluruh
// isi element
