let chusla = [3, 7, 9];
let chusla1 = chusla.slice();
let chusla2 = [];



for(i=0; i<5; i++){
    let ans = prompt(`Введіть 5 чисел`);
    let ans_num = Number(ans);
    if(chusla.indexOf(ans_num) == -1){
    chusla.push(ans_num)
    }else{
        chusla[chusla.indexOf(ans_num)] = "*";
        chusla2.push(ans_num);
    }

}
if(chusla.length <=6){
    alert(`Перемога вгадано числа ${chusla2}`)
    
}















console.log(chusla);
console.log(chusla2);