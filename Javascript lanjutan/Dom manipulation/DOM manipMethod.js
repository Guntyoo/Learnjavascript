// ada dua bagian dalam manipulasi DOM
//manipulasi element(innerHTML,style,dll) dan manipulasi node(menambahkan dan menghilangkan element)

//innerHTML
//method yang mengubah isi dari sebuah html

const judul = document.getElementById("judul");
judul.innerHTML = "<em>Agung prastiyo</em>";

//manipulasi root ke section a mengganti element p2
const sectionA = document.getElementById("section#a");
const p2 = document.querySelectorAll("p");
p2[1].innerHTML = "ambatukam";

//menghapus keseluruhan section a dan diganti menjadi helloworld
//const a = document.querySelector ('section#a');
//a.innerHTML = 'Hello world!';

//element.style.<properties>

const p4 = document.querySelectorAll("p");
p4[3].style.color = "red";
p4[2].style.backgroundColor = "lightblue";
