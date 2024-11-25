//membuat program resposive antrian pasien puskesmas
var customer = ["agung", undefined, "tyo"];
var tambahcustomer = function (namacustomer, customer) {
  //jika angkot terisi
  if (customer.length == 0) {
    // add customer
    customer.push(namacustomer);
    //return customer
    return customer;
  } else {
    //menulusuri seluruh kursi dari kosong menggunakann looping
    for (var i = 0; i < customer.length; i++) {
      //jika ada kursi yang kosong
      if (customer[i] == undefined) {
        //menambahkan customer ke kursi
        customer[i] = namacustomer;
        //return value array& out at function
        return customer;
      }
      //jika sudah ada nama customer yang sama
      else if (customer[i] == namacustomer) {
        //maka tampilkan kesalahan
        console.log(namacustomer +"  nama sudah tersedia!");
        //return value & keluar if
        return customer;
      }
      //jika ada kursi kosong
      //jika sudah ditelusuri sampai akhir tetapi ada kursi kosong dan kursi terakhir sudah terisi
      else if (i == customer.length - 1) {
        //tambah customer dikursi kosong
        customer.push(namacustomer);
        //return value dan keluar  if
        return customer;
      }
    }
  }
};
