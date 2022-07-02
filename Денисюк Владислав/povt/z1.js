let main = document.getElementById(`main`);
let mashina1 = {
    image:"<img src=nubira.jpg>",
    nazva: "Daewoo nubira",
    price: 5000,
    color: "Білий",
    probih: 30000,
}
let mashina2 = {
    image:"<img src=aventador.jpg>",
    nazva: "Lamborghini Aventador",
    price: 725000,
    color: "Зелений",
    probih: 0,
}
let mashina =  `<div class="car">
    ${mashina1.image}
    <h2 align=center>${mashina1.nazva}</h2>
    <h1>Ціна:${mashina1.price}$</h1> 
    <h3> Колір:${mashina1.color}</h3>
    <h3>Пробіг: ${mashina1.probih} тис. км</h3>
    </div>`

mashina += `<div class="mashina2" id="mashina2">
${mashina2.image}
<h2 align="center">${mashina2.nazva}</h2>
<h2>Ціна: ${mashina2.price}$</h2>
<h2>Колір: ${mashina2.color}</h2>
<h2>Пробіг: ${mashina2.probih} км</h2>
</div>`

mashina += `<div class="mashina2" id="mashina2">
${mashina2.image}
<h2 align="center">${mashina2.nazva}</h2>
<h2>Ціна: ${mashina2.price}$</h2>
<h2>Колір: ${mashina2.color}</h2>
<h2>Пробіг: ${mashina2.probih} км</h2>
</div>`





main.innerHTML = mashina;