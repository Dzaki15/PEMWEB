const tulis = document.getElementById('latihan')
tulis.innerHTML = "ini adalah pertama saya melalui DOM"

const h1 = document.getElementsByTagName("h1")
const tulish1 = document.getElementById("h1")
tulish1.innerHTML = " "
for(let i=0; i<10; i++){
    tulis,innerHTML += h1[0].innerHTML + "<br>"
}