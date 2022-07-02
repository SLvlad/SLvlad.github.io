let klaviatyra = {
    akcia: false,
    nazva: "Клавіатура Cougar Vantar",
    vidhyku: 6,
    price: 1286,
    image:"<img src=photo2.jpg>",
};

let product1 = `<div class="card">
<div class="header">
    
</div>

<div class="card_image">
    ${klaviatyra.image}
</div>

<div class="card_info">
    <div class="name">
        ${klaviatyra.nazva}
    </div>
    
    <div class="reviews">
        ${klaviatyra.vidhyku} відгуки
    </div>
    
    <div class="price">
        ${klaviatyra.price}&#8372;
    </div>
</div>
</div>`;
let balu1 = "";







let klaviatyra1 = {
    akcia: true,
    nazva: "Клавіатура дротова Logitech G209 Prodigy USB",
    vidhyku: 204,
    price: 1399,
    image:"<img src=photo1.jpg>",
};
let products = document.getElementById(`products`);
product1 += `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    ${klaviatyra1.image}
</div>

<div class="card_info">
    <div class="name">
        ${klaviatyra1.nazva}
    </div>
    
    <div class="reviews">
        ${klaviatyra1.vidhyku} відгуки
    </div>
    
    <div class="price">
        ${klaviatyra1.price}&#8372;
    </div>
</div>
</div>`;
let balu2 = "";
if(klaviatyra.price < klaviatyra1.price){
    let balu1 = klaviatyra1.price - klaviatyra.price
}else{
    let balu2 = klaviatyra.price - klaviatyra1.price
}

products.innerHTML = product1;