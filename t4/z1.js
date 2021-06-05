let zap1 = prompt(`Столиця України?`);
let zap2 = prompt(`Який сьогодні рік?`)
let zap3 = confirm(`Земля кругла?`)
let zap4 = confirm(`Телефон може ходити?`)
let result = 0;
if(zap1 == 'Київ'){
    result = result + 1;
}else{}
if(zap2 == `2021`){
    result = result + 1;
}else{}
if(zap3 == true){
    result = result + 1;
}else{}
if(zap4 == false){
    result = result + 1;
}else{}
alert(result);