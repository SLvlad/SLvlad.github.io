function to_Order(){
   let orders =  JSON.parse(localStorage.getItem('prod'));
   let suma = 0;
   orders.forEach(prod =>{
    suma = suma + Number(prod.price);
   })
   console.log(suma)
   let order = {
    user_pib: user_pib.value,
    user_phone: user_phone.value,
    user_city: user_city.value,
    user_address: user_address.value,
    user_pay_type: user_pay_type.value,
    suma: suma
   }
   db.collection('all_orders').add(order).then(res =>{
    console.log('успіх')
   })
}
to_Order()