//menu
function pindahKonten(idKonten) {
    var konten = document.getElementById(idKonten);
    var semuaKonten = document.querySelectorAll('.konten');
    semuaKonten.forEach(function(item) {
        item.style.display = 'none'; // Semua konten disembunyikan
    });
    konten.style.display = 'block'; // Konten yang dipilih ditampilkan
}

//luas segitiga
function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    var luas = 0.5 * alas * tinggi;
    document.getElementById('luas').innerHTML = "Luas Segitiga: " + luas.toFixed(2);
}
//keliling
function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);
    var keliling = sisiA + sisiB + sisiC;
    document.getElementById('keliling').innerHTML = "Keliling Segitiga: " + keliling.toFixed(2);
}
//reset
function reset() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas').innerHTML = '';
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').innerHTML = '';
    document.getElementById('keliling').innerHTML = '';
}