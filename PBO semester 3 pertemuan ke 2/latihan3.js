function proses() {
    let nama = document.getElementById('nama');
    const tulis = document.getElementById('tulis'); 

    tulis.innerHTML = "Perkenalkan nama saya " + nama.value;
}


function ganti(){
    const tulis = document.getElementById('tulis')
    tulis.style.color = 'red'

    tulis.innerHTML = "yahaha hayuuu"
}