//make chess game with JS
// let sama saja kaya var
let n = 5 // garis vertikal
let string = ""

//buat baris
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= n; j++){
      // buat papan jika if true spasi kanan kalau false spasi kiri
      if (i % 2 == 1) {
        string += "# ";
      } else {
        string += " #";
      }
    }
    //untuk enter antar baris
    string += "\n";
}

console.log (string)
