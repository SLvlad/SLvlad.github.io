let chisla = [ 5, 8, 8, 7, 10 ];
let name = (`Петро`);
let predmet = (`математика`);
let result = 0;
for(i = 0; i < 5; i++){
   let hranilische = parseInt(prompt(`Введіть оцінку`) );
   chisla[i] = hranilische;
   sum = sum + hranilische
}
console.log(`Вітаю ${name}! Кількість оцінок з предмету ${predmet} рівна ${chisla.length}. Остання оцінка - ${chisla[chisla.length - 1]}. Середній бал всіх оцінок `)