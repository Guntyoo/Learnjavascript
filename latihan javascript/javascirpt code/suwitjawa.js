var tanya = true

while ( tanya == true ) {
    // menangkap pilihan playar
    var p = prompt ('pilih = gajah,orang,semut');
    //menangkap pilihan komputer
    //membangkitkan angka random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    
    //membuat rules
     var hasil = '';
      if (p == comp) {
        hasil = "SERI!"
      } else if (p == 'gajah') 
    //      if (comp = orang) {
    //         hasil = 'MENANG!'
    //      } else { hasil = 'KALAH!'}
    //   }
       hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
      else if (p == 'orang')
        // if ( comp == gajah) {
        //     hasil = 'KALAH!';
        // } else { hasil == 'MENANG!';
        // }
        hasil = (comp == gajah) ? 'KALAH!' : 'MENANG!';

      else if (p == 'semut') 
     // if (comp == 'orang') {
     // hasil = 'KALAH!';
     //  } else { 
     // hasil = 'MENANG!';
     //   }
      hasil = (comp == orang) ? 'KALAH!' : 'MENANG!';

      else {
        hasil = 'Anda memasukan pilihan yang salah';
      }
    //menampilkan hasil
      alert ('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + ' \n Maka hasilnya ' + hasil );
      
      tanya = confirm ('lagi?');
}

alert ('terimakasih sudah bermain');