const all_orders = [
	{
		client_name: "Дмитро Іванов",
		client_phone: "+3809781240",
		order_name: "Iphone X",
		order_price: "520",
		order_status: true
	},
	{
		client_name: "Тетяня Микитенко",
		client_phone: "+3809646712",
		order_name: "Клавіатура",
		order_price: "60",
		order_status: false
	},
	{
		client_name: "Андрій Тарасенко",
		client_phone: "+3809641412",
		order_name: "Телефон Samsung",
		order_price: "360",
		order_status: true
	}
]
let order = {
    username: ``,
    phone: ``,
    tovar: ``,
    price: ``,
    check: ``
}

function addOrder(){
  order.username = document.getElementById(`client_name`).value;
  order.phone = document.getElementById(`client_phone`).value;
  order.tovar = document.getElementById(`order_name`).value;
  order.price = document.getElementById(`order_price`).value;
  order.check = document.getElementById(`order_status`).value;
  console.log(order);
}
let orders_table = document.getElementById(`orders_table`);
let data = ``;
for(i=0; i<all_orders.length; i++){
    data += `<tr>
<td>${i + 1}</td>
<td>${all_orders[i].client_name}</td>
<td>${all_orders[i].client_phone}</td>
<td>${all_orders[i].order_name}</td>
<td class="centered">${all_orders[i].order_price}</td>
<td class="centered"><input type="checkbox" checked></td>
<td class="centered"><button class="del_btn">Видалити</button></td>
</tr>`
}


orders_table.innerHTML = data;
