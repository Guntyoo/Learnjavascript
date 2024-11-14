//manipulasi array :


//menambah index dan value array
//setiap index dimulai dari 0
//value paling depan = index 0
var array = ["a",1,true];


//cara mengubah/menghapus value array
//arr[1] = undefined;

//cara menampilkan isi array
//arr.length cara js menghitung index secara otomatis
var arr = ["Alfaroji","luki","atminsuki"];
 for (var i = 0; i < arr.length; i++) {
    console.log('siswa ke-' + i + ' :' + arr[i])
 }

 //1. (.join) method pada array dalaam js
 //() pada .join disebut sebagai separator digunakan sebagai pemisah
//console.log(arr.join('-'));

//2. push & pop
//push menambahkan sebuah value array
//value push bisa lebih dari 1
arr.push('apis', 'pane');
//pop menghapus value terakhir elemen/array
arr.pop();
console.log(arr.join( ));

//3. unshift & shift
//unshift menambah value array namun posisi nya didepan
arr.unshift('pane');
//shift menghilangkan elemen/value  terdepan dari sebuah array
arr.shift()
console.log(arr.join());