document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    body.style.fontFamily = "'Open Sans', sans-serif"; // Menggunakan font Open Sans
    body.style.backgroundColor = '#f0f4f8';
    body.style.color = '#333';
    body.style.margin = '0';
    body.style.padding = '0';

    // Membuat header dan form
    const h1 = document.createElement('h1');
    h1.textContent = 'FORMULIR MAHASISWA BARU';
    h1.style.textAlign = 'center';
    h1.style.color = '#34495e';
    h1.style.marginBottom = '20px';
    h1.style.fontSize = '2em'; // Ukuran font lebih besar untuk judul
    body.appendChild(h1);

    const formContainer = document.createElement('div');
    formContainer.style.display = 'flex';
    formContainer.style.justifyContent = 'center';
    body.appendChild(formContainer);

    const form = document.createElement('form');
    form.id = 'studentForm';
    form.style.display = 'grid';
    form.style.gridTemplateColumns = '1fr 1fr';
    form.style.gap = '15px';
    form.style.backgroundColor = '#ffffff';
    form.style.borderRadius = '10px';
    form.style.padding = '30px';
    form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    form.style.maxWidth = '600px';
    form.style.width = '100%';
    formContainer.appendChild(form);

    // Fungsi untuk membuat elemen input dan label
    function createInput(labelText, id, type = 'text', placeholder = '') {
        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.gridColumn = '1 / span 2';
        label.style.fontSize = '1em'; // Ukuran font label
        label.style.fontWeight = 'bold'; // Font tebal untuk label
        form.appendChild(label);

        const input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.placeholder = placeholder;
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.border = '1px solid #ccc';
        input.style.borderRadius = '5px';
        input.style.outline = 'none';
        input.style.gridColumn = '1 / span 2';
        input.style.boxSizing = 'border-box';
        input.style.fontSize = '1em'; // Ukuran font input
        input.addEventListener('focus', () => input.style.borderColor = '#3498db');
        input.addEventListener('blur', () => input.style.borderColor = '#ccc');
        form.appendChild(input);
    }

    // Fungsi untuk membuat dropdown
    function createSelect(labelText, id, options) {
        const label = document.createElement('label');
        label.textContent = labelText;
        label.style.gridColumn = '1 / span 2';
        label.style.fontSize = '1em'; // Ukuran font label
        label.style.fontWeight = 'bold'; // Font tebal untuk label
        form.appendChild(label);

        const select = document.createElement('select');
        select.id = id;
        select.style.width = '100%';
        select.style.padding = '10px';
        select.style.border = '1px solid #ccc';
        select.style.borderRadius = '5px';
        select.style.gridColumn = '1 / span 2';
        select.style.outline = 'none';
        select.style.fontSize = '1em'; // Ukuran font select
        select.addEventListener('focus', () => select.style.borderColor = '#3498db');
        select.addEventListener('blur', () => select.style.borderColor = '#ccc');

        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            select.appendChild(opt);
        });
        form.appendChild(select);
    }

    // Membuat input untuk form
    createInput('Nama: ', 'nama', 'text', 'Masukkan Nama');
    createInput('NIM: ', 'nim', 'text', 'Masukkan NIM');
    createInput('Tempat Lahir: ', 'tempatLahir', 'text', 'Kota / Kabupaten');
    createInput('Tanggal Lahir: ', 'tanggalLahir', 'date');
    createSelect('Jenis Kelamin: ', 'jenisKelamin', ['Laki-laki', 'Perempuan']);
    createInput('Alamat: ', 'alamat', 'text', 'Tulis Alamat');
    createSelect('Program Studi: ', 'programStudi', [
        'Sistem Informasi Kelautan', 
        'Logistik Kelautan', 
        'Pendidikan Guru Sekolah Dasar', 
        'Pendidikan Guru PAUD'
    ]);

    // Membuat tombol submit
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Simpan';
    submitButton.style.gridColumn = '1 / span 2';
    submitButton.style.padding = '10px';
    submitButton.style.backgroundColor = '#3498db';
    submitButton.style.color = '#fff';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.transition = 'background-color 0.3s ease';
    submitButton.style.fontSize = '1em'; // Ukuran font tombol
    submitButton.addEventListener('mouseover', () => submitButton.style.backgroundColor = '#2980b9');
    submitButton.addEventListener('mouseout', () => submitButton.style.backgroundColor = '#3498db');
    form.appendChild(submitButton);

    // Membuat tabel untuk menampilkan hasil input
    const tableContainer = document.createElement('div');
    tableContainer.style.margin = '30px auto';
    tableContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    tableContainer.style.borderRadius = '10px';
    tableContainer.style.overflowX = 'auto'; // Menambahkan scroll jika tabel melebihi lebar layar
    body.appendChild(tableContainer);

    const table = document.createElement('table');
    table.id = 'studentTable';
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse'; // Menghilangkan jarak antara border tabel
    table.style.border = '1px solid #ccc'; // Border pada tabel
    table.style.borderRadius = '10px';
    table.style.overflow = 'hidden'; // Agar border radius tidak terpotong
    tableContainer.appendChild(table);

    const headerRow = document.createElement('tr');
    ['Nama', 'NIM', 'Tempat Lahir', 'Tanggal Lahir', 'Jenis Kelamin', 'Alamat', 'Program Studi'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.padding = '15px'; // Padding lebih besar
        th.style.backgroundColor = '#3498db';
        th.style.color = '#fff';
        th.style.textAlign = 'left'; // Rata kiri untuk header
        th.style.borderBottom = '2px solid #fff'; // Border bawah untuk header
        th.style.fontSize = '1em'; // Ukuran font header tabel
        th.style.borderRight = '1px solid #fff'; // Border kanan pada header
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Fungsi untuk menampilkan popup dan menambah data ke tabel
    function showAlertAndSaveData(message, isValid) {
        alert(message);
        if (isValid) {
            // Mengambil nilai input dari form
            const nama = document.getElementById('nama').value;
            const nim = document.getElementById('nim').value;
            const tempatLahir = document.getElementById('tempatLahir').value;
            const tanggalLahir = document.getElementById('tanggalLahir').value;
            const jenisKelamin = document.getElementById('jenisKelamin').value;
            const alamat = document.getElementById('alamat').value;
            const programStudi = document.getElementById('programStudi').value;

            // Membuat baris baru untuk tabel
            const row = document.createElement('tr');
            [nama, nim, tempatLahir, tanggalLahir, jenisKelamin, alamat, programStudi].forEach(text => {
                const td = document.createElement('td');
                td.textContent = text;
                td.style.padding = '15px'; // Padding lebih besar
                td.style.borderBottom = '1px solid #ccc'; // Border bawah untuk sel
                td.style.fontSize = '1em'; // Ukuran font data tabel
                td.style.borderRight = '1px solid #ccc'; // Border kanan pada sel 
                row.appendChild(td); });
            // Menambahkan baris baru ke tabel
                table.appendChild(row);

            // Reset form setelah data disimpan
                form.reset();
    }
}

            // Menangani event submit form
                form.addEventListener('submit', function (event) {
                event.preventDefault(); // Mencegah halaman refresh

            // Validasi form
                const nama = document.getElementById('nama').value;
                const nim = document.getElementById('nim').value;
                const tempatLahir = document.getElementById('tempatLahir').value;
                const tanggalLahir = document.getElementById('tanggalLahir').value;
                const jenisKelamin = document.getElementById('jenisKelamin').value;
                const alamat = document.getElementById('alamat').value;
                const programStudi = document.getElementById('programStudi').value;

            // Validasi apakah semua input diisi
                const isValid = nama && nim && tempatLahir && tanggalLahir && jenisKelamin && alamat && programStudi;

        if (isValid) {
        showAlertAndSaveData('Data berhasil disimpan!', isValid);
        } else {
        showAlertAndSaveData('Lengkapi biodata Anda!', isValid);
        }
    });
});

document.getElementById('jenisKelamin').addEventListener('change', function () {
    alert('Anda memilih jenis kelamin: ' + this.value);
});

document.getElementById('programStudi').addEventListener('change', function () {
    alert('Anda memilih program studi: ' + this.value);
});

document.getElementById('nama').addEventListener('input', function () {
    console.log('Nama saat ini: ' + this.value);
});
const inputs = document.querySelectorAll('input[type="text"], input[type="date"]');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.boxShadow = '0 0 5px #3498db';
    });
    input.addEventListener('blur', function () {
        this.style.boxShadow = 'none';
    });
});
document.getElementById('nim').addEventListener('keydown', function (e) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault(); // Mencegah input selain angka
    }
});
table.addEventListener('dblclick', function (event) {
    const targetRow = event.target.closest('tr');
    if (targetRow && targetRow !== headerRow) {
        const cells = targetRow.querySelectorAll('td');
        const nama = cells[0].textContent;
        alert('Anda mengedit data mahasiswa: ' + nama);
        // Bisa tambahkan logika untuk edit form di sini
    }
});
