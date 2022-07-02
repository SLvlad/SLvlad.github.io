let masuv = [3, 10, 6];

for(i=1; i<=5; i++){
    let chislo = prompt(`Введіть число (від 1 до 10)`);
    let chislo_num = Number(chislo);
    let y = masuv.indexOf(chislo_num);
   if(y == -1){
   masuv.push(chislo_num);
    }else{
        masuv[y] = "*";
    }

}
console.log(masuv);