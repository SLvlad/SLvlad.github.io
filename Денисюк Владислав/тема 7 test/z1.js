let number = [];
let name1 = prompt(`ГРАВЕЦЬ 1 введіть ваше ім'я`);
let name2 = prompt(`ГРАВЕЦЬ 2 введіть ваше ім'я`);
for(i=1; i<6; i++){
    number.push(prompt(`${name1} загадайте № число`));
}


for(i=8; i>7; i++){

let answer = prompt(`${name2} пробуйте вгадати число (від 1 до 20)`); 


if(number.indexOf(answer) == -1){
    alert(`Ви програли!!!`);

}else{

    alert(`Ви виграли!!!`);
break;
}

console.log(number);



}