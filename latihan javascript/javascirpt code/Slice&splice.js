//melanjutkan materi array part 2

//4.splice
//splice(index awal,apayangingindihapus,Elemen baru1,Elemen baru 2)
var arr =['Jawa', 'Sumatra', 'Sulawesi'];
arr.splice(2, 0, 'kalimantan','jakarta');
arr.splice (1 , 2)
console.log(arr.join(' - '));

//5.Slice
//slice(indexawal,indexakhir)
var arr2 = ['jakarta','bandung','bogor','depok']
var kota = arr2.slice(1,3);
console.log(arr2.join("-"));
console.log(kota.join('-'));
