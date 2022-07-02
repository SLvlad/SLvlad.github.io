const masuv_1 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
const masuv_2 = [1200, 1140, 1400, 1150, 1400, 2500, 2950];
let zagal = 0;
MAX = masuv_2[0];
MIN = masuv_2[0];
console.log(`День - Прибуток`)
for(i=0; i < 7; i++){
  console.log(`${masuv_1[i]} - ${masuv_2[i]}`); 
    zagal = zagal + masuv_2[i];
}
for(i=0; i < masuv_2; i++){
    if(MAX < masuv_2[i]){
        MAX = masuv_2[i]

    }if(MIN > masuv_2[i]){
        MIN = masuv_2[i];
    }
}



        


console.log(`Загальна кількість - ${zagal}`);
        console.log(`Найбільше зароблено - ${MAX}`);
        console.log(`Найменше зароблено - ${MIN}`);