const h1 = document.createElement("h1");
h1.innerHTML = "saya sedang belajar DOM nih....";
document.body.append(h1);

const img = document.createElement("img");
img.src = "pariwara TASKA (2).jpg";
img.width = 100;
document.body.append(img);

const form = document.createElement("form");
form.innerHTML = "<input type='text' placeholder='masukan nama'>";
form.innerHTML += "<input type='submit' value='kirim'>";
document.body.append(form);

// Membuat tabel
const table = document.createElement("table");
const row = document.createElement("tr");
const noHeader = document.createElement("th");
noHeader.innerHTML = "No";
row.appendChild(noHeader);
const nameHeader = document.createElement("th");
nameHeader.innerHTML = "Nama";
row.appendChild(nameHeader);
table.appendChild(row);
const data = [
    { no: 1, nama: "Tegar Dzaki Hakim" },
    { no: 2, nama: "Habibirrohim" },
    { no: 3, nama: "Faiq Muammar" }
];

data.forEach(item => {
    const dataRow = document.createElement("tr");

    const noCell = document.createElement("td");
    noCell.innerHTML = item.no;
    noCell.style.border = "1px solid black";

    const nameCell = document.createElement("td");
    nameCell.innerHTML = item.nama;
    nameCell.style.border = "1px solid black";

    dataRow.appendChild(noCell);
    dataRow.appendChild(nameCell);
    table.appendChild(dataRow);
});

table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
noHeader.style.border = "1px solid black";
nameHeader.style.border = "1px solid black";
document.body.append(table);


const form2 = document.createElement("form")
document.body.append(form2)

const input = document.createElement("input")
input.setAttribute('type' , 'text')
input.setAttribute('placeholder', 'masukan Nama Anda')

const tombol = document.createElement("input")
input.setAttribute('type' , 'submt')
input.setAttribute('value', 'simpan')

form2.append(input)
form2.append(tombol)