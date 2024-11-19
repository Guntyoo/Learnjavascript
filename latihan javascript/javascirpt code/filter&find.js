//part 4 array method
//filter & find 
//filter digunakan untuk memfilter/menyaring array dan dikembalikan dalam bentuk array
//contoh implemen
var int = [1,3,5,2,7,8,10];
var number = int.filter(function(e){
    return e > 5
});
 console.log(number);

 //find digunakan untuk mengambil SATU nilai dan dikirimkan kembali dengan 1 nilai saja
var int = [1, 3, 5, 2, 7, 8, 10];
var number = int.find(function (e) {
  return e > 5;
});
console.log(number);

