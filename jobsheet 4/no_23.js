const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukan indeks awal:", (startIndex) => {
        rl.question("Masukan panjang substring: ", (length) => {
            //konversi nilai index dan panjang ke tipe number
            startIndex = Number(startIndex);
            length = Number(length);
            //gunakan method  substr untuk mengambil substring dan startindex dengan panjang length
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`Hasil substring dari index ${startIndex} dengan panjang ${length} ${substringResult}`);
            rl.close();
 4       });
    });
});
