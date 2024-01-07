// 1.mencari keliling persegi panjang
// memasukkan nilai panjang, lebar
let panjang = 150;
let lebar = 40;
// menghitung rumus: 2*panjang + 2*lebar
let hasil = 2 * panjang + 2 * lebar;
// menampilkan hasil
console.log ("keliling persegi panjang adalah: " + hasil)


// 2.luas lingkaran
//tentukan phi dan r
let phi = 3.14;
let r = 10;

let hasilL = phi * r *r;

console.log("hasilnya: " + hasilL)

let lp = 64;

let sisi = Math.sqrt(lp)

let hasilNya = 4 * sisi;

console.log (sisi)

console.log (hasilNya)

// syarat umur membuat KTP
// input
let umur = 18;

// proses / logika
if(umur >=17){
    result = "bisa membuat KTP";
} else {
    result = "belum bisa membuat KTP"
}

// output
console.log(result)

// nilai akhir
let PABP = 86;
let MTK = 82;
let DPK = 77;

// proses / logika
let rata = (PABP + MTK + DPK) / 3;

if (rata >=80 && rata <=100){
    grade = "A";
} else if (rata >=75 && rata <80){
    grade = "B";
} else if (rata >=65 && rata <75){
    grade = "C";
} else if (rata >=45 && rata <65){
    grade = "D";
} else if (rata >=0 && rata <45){
    grade = "E";
}

console.log(grade)