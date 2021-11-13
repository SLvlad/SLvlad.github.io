const masuv_1 = [1, 2, 3, 4,];
const masuv_2 = [3, 8, 1, 9, 10];
let masuv_3 = []

for(i=0; i < masuv_1.length; i++){
    if(masuv_3.indexOf(masuv_1[i]) == -1){
        masuv_3.push(masuv_1[i])
}
}
for(i=0; i < masuv_2.length; i++){
if(masuv_3.indexOf(masuv_2[i]) == -1){
    masuv_3.push(masuv_2[i])
}
}



console.log(masuv_1);
console.log(masuv_2);
console.log(masuv_3);