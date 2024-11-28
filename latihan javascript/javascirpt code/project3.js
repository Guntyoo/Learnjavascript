function Bus (sopir,trek,penumpang,kas) {
    this.sopir = sopir;
    this.trek = trek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namapenumpang) {
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    };

    this.penumpangTurun = function (namapenumpang,bayar) {
        if (penumpang.length === 0) {
            alert("kursi masi kosong!");
            return false;
            }  for (var i = 0; i < penumpang.length; i++) {
                if (this.penumpang[i] == namapenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } 
            }
        
    }
};

var bus1 = new Bus("Dika",["kuningan","depok"],[],0);
var bus2 = new Bus('daler',["bekasi","jakarta"],[],0);