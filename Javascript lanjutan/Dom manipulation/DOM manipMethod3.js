//masi melanjutkan manipulasi node

//document.createElement ()
//menambahkan elemen baru

//membuat elemen p
const vas = document.createElement("p"); //element p sudah ditambahkan dalam memory namun belum ada isinya

//document.createTextNode ()

//membuat text berisi "bunga"
const textBaru = document.createTextNode("bunga"); //membuat textbaru namun masi saling synergy

//.appendChild(elemen yang ingin dimasukkan) //
//berfungsi sebagai memasukan elemen ke elemen lain

//memasukan text kedalam p

vas.appendChild (textBaru);  //p menambahkan text baru

//membuat section a karena ingin dimasukan diakhir section a

const SecA = document.getElementById ('a');

//masukan vas ke secA

SecA.appendChild (vas);