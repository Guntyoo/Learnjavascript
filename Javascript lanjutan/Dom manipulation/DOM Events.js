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