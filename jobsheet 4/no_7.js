const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//charAt
rl.question("Masukan sebuah kalimat: ", (inputString) =>{
    rl.question("Masukan indeks yang ingin anda cek: ", (index) => {
        //konversi nilai index ke tipe number
        index = Number(index);
        //periksa apakah index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length){
        //gunakan method charAt untuk mendapatkan karakter pada indeks yang diminta\
        const character = inputString.charAt(index);
        console.log(`Karakter pada indeks ${index}: ${character}`);
        } else {
            console.log("Indeks tidak valid");
        }
        rl.close();
    });
});