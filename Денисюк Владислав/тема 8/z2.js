let suma = 0;
let a = true;
let kilkict = 0;
while(a == true){
    let cina = Number (prompt(`Введіть ціну товара`));
    suma = suma + cina;
    kilkict++;
    a = confirm(`Хочете продовжити покупки? Якщо так натисніть "ок" якщо ні натисніть "скасувати"`);
}
let ser = suma / kilkict;

console.log(`Ви придбали ${kilkict} товарів на загальну суму - ${suma} грн. Середня ціна покупок - ${ser}`);


