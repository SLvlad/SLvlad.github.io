const users = [
	"Андрусишин Олег",
	"Балицький Олексій",
	"Барановський Ігор",
	"Бей Тетяна",
	"Білас Всеволод",
	"Білоус Андрій",
	"Бордун Галина",
	"Буба Євген",
	"Вантух Володимир",
	"Васьків Роман",
	"Вервега Тарас",
	"Візняк Юрій",
	"Гагалюк Богдан",
	"Ганущин Олександр",
	"Гичка Михайло",
	"Гірняк Володимир",
	"Голуб Юрій",
	"Грабінський Ігор",
	"Грицик Ольга",
	"Гудима Юрій",
	"Дворянин Парасковія",
	"Дейнека Анатолій",
	"Демчина Роман",
	"Дзюдзь Михайло"
];
let imya = prompt(`Скільки користувачів ви хочете ввести?`);
let names = [];
for(i=0; i<imya; i++){
  let imya1 = prompt(`Введіть ім'я`);
    names.push(imya1);
}
let table = document.getElementById(`table`);
let radok = `<tr><th>№</th><th>Користувач</th><th>Відправити лист</th></tr>`;
for(i=0; i<users.length; i++){
    if(i % 2 == 0){
        radok += `<tr><td>${i+1}</td><td>${users[i]}</td><td><input type="checkbox"></td></tr>`
    }else{
        radok += `<tr class="color"><td>${i+1}</td><td>${users[i]}</td><td><input type="checkbox"></td></tr>`
    }
        
    
}
table.innerHTML = radok;