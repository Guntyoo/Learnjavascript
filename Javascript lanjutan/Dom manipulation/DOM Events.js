//Events secara definisi yaitu Event diJavascript yang mempresentasikan sebuah kejadian yang terjadi pada DOM
//event bisa dilakukan oleh user cth(menklik mouse,keyboard,dll) atau dilakukan secara otomatis oleh API

//addEventListener('string',listener)s
const p4 = document.querySelector('section#b p');
p4.addEventListener('click',function() {
    //membuat elemen baru di li
    const ul = document.querySelector('section#b ul'); //tangkap parent terlebih dahulu,li yaitu ul
    const li = document.createElement('li');
    const itemBaru = document.createTextNode('item baru')
    li.appendChild(itemBaru);
    ul.appendChild(li);
});

//perbedaan event handler dengan addEventListener
//event handler hanya bisa menyimpan 1 event,jika ada event baru dalam satu blok 
// maka event sebelumnya akan tertimpa dengan event baru
//cth:
const p3 = document.querySelector('.p3');
p3.onclick = function () {
    p3.addEventListener('click',function() {
        p3.style.backgroundColor = 'lightblue';
    })};
    p3.addEventListener('click',function () {
        p3.style.color = 'red';
    });