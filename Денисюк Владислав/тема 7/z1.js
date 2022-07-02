let pass = 6667;
let lich = 3;
for(i=1; i<=3; i++){
  let sproba = prompt(`Введіть пароль. Залишилось спроб - ${lich}`);
    lich--;

  if(sproba == pass){
    alert("Пароль вірний");
    break;
  }if(lich == 1){
      alert(`Підказка: перша цифра 6`)
  }
}