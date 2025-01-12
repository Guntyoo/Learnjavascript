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


//how to use insertBefore


const liBaru = document.createElement ('li');  //create new elemen


const teksLiBaru = document.createTextNode ('item baru'); //create new text

liBaru.appendChild(teksLiBaru);  //insert new text to new elemen

//scope Element 
const ul = document.querySelector('section#b ul'); //scope to b->ul
const li2 = ul.querySelector('li:nth-child(2)');  //scope to ul->li:nth:child(psudo class)

//use insertBefore
ul.insertBefore(liBaru,li2);

//rest dulu bang
