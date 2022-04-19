//mengambil semua element input
//mengambil input persegi
let persegi = document.getElementById('persegiS');

//mengambil input persegi panjang
let persegiPanjangP = document.getElementById('persegiPP');
let persegiPanjangL = document.getElementById('persegiPL');

//mengambil input lingkaran
let lingkaran = document.getElementById('lingkaranJ');

//mengambil input segitiga
let segitiga = document.getElementById('segitigaA'); 
let segitigaS = document.getElementById('segitigaT');

// mengambil semua element button
const btnPersegi = document.getElementById('btnPersegi');
const btnPersegiP = document.getElementById('btnPersegiP');
const btnSegitiga = document.getElementById('btnSegitiga');
const btnLingkaran = document.getElementById('btnLingkaran');

//mengambil semua textarea
const txtPersegi = document.getElementById('txtPersegi');
const txtPersegiP = document.getElementById('txtPersegiP');
const txtSegitiga = document.getElementById('txtSegitiga');
const txtLingkaran = document.getElementById('txtLingkaran');

//kumpulan function
//function persegi
function hitungPersegi(){
    let s = Number(persegi.value);
    let luas = s * s;
    txtPersegi.value = luas;
}
btnPersegi.addEventListener('click', hitungPersegi);
//function persegi panjang
function hitungPersegiP(){
    let p = Number(persegiPanjangP.value);
    let l = Number(persegiPanjangL.value);
    let luas = p * l;
    txtPersegiP.value = luas;
}
btnPersegiP.addEventListener('click', hitungPersegiP);
//function lingkaran
function hitungLingkaran(){
    let r = Number(lingkaran.value);
    let luas = 3.14 * r * r;
    txtLingkaran.value = luas;
}
btnLingkaran.addEventListener('click', hitungLingkaran);
//function segitiga
function hitungSegitiga(){
    let a = Number(segitiga.value);
    let t = Number(segitigaS.value);
    let luas = 0.5 * a * t;
    txtSegitiga.value = luas;
}
btnSegitiga.addEventListener('click', hitungSegitiga);