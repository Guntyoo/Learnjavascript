//membuat program resposive angkot
var arr = [];
var tambahpenumpang = function (namapenumpang,penumpang) {
  //jika angkot terisi
  if (arr.length == 0) {
    // add penumpang
    penumpang.push(namapenumpang);
    //return penumpang
    return penumpang;
  } else {
    //menulusuri seluruh kursi dari kosong menggunakann looping
    for (var i = 0; i < arr.length; i++) {
      //jika ada kursi yang kosong
      if (penumpang[i] == undefined) {
        //menambahkan penumpang ke kursi
        penumpang[i] = namapenumpang;
        //return value array& out at function
        return penumpang;
      }
    }
  }
};
