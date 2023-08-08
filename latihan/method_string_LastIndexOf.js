const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan kata yang ingin anda cari: ", (kataCari) => {
  // gunakan method LastIndexOf untuk mencari kata dalam kalimat
  const indeksKataTerakhir =  kalimat.lastIndexOf(kataCari);
  if (indeksKataTerakhir !== -1) {
    console.log(`Kata '${kataCari}' ditemukan pada indeks terakir: ${indeksKataTerakhir}`);
  } else {
    console.log(`Kata '${kataCari}' tidak ditemukan dalam kalimat.`);
  }
  rl.close();
    });
});