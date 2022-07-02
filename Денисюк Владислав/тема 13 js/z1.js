let klaviatyra = {
    akcia: true,
    nazva: "Клавіатура дротова Logitech G209 Prodigy USB",
    vidhyku: 204,
    price: 1399,
    image:"<img src=photo1.jpg>",
};
let products = document.getElementById(`products`);
let product1 = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
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
products.innerHTML = product1;