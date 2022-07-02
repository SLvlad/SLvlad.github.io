let misac = prompt('Календар для?')
let month = document.getElementById(`month`);

let days = ` `;
let zagolovok = document.getElementById(`zagolovok`);
zagolovok.innerHTML = `Календар для місяця ${misac}`;
let x = 0;



for(i=1; i<x; i++){
  if(misac == "Січень" || misac == "Березень" || misac == "Липень" || misac == "Травень" || misac == "Серпень" || misac == "Жовтень" || misac == "Грудень"){
x = 32;


  }else if(misac == "Квітень" || misac == "Червень" || misac == "Вереснь" || misac == "Листопад"){
x = 31;


  }else if(misac == "Лютий"){
x = 29;



  }else{
    alert(`Такого місяця неіснує!!!`)
  };

    if(i % 7 == 0 || (i+1) % 7 == 0){
      days+= `<div class="day week">${i} <br> ${misac}</div>`;  
    }else{
        days+= `<div class="day">${i} <br> ${misac}</div>`;
    }   



}
month.innerHTML = days;
console.log()

