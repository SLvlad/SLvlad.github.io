let masuv = [];
for(i=1; i<=5; i++){
    masuv.push(prompt(`Введіть 5 чисел`))
};
for(i=1; i<=3; i++){
    let answer = prompt(`Введіть число`);



if(masuv.indexOf(answer) == -1){
    alert(`Ви програли`);
}else{
    alert(`Молодець!!!`)
    
}
}

