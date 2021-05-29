let email = `progamer@gmail.com`;
let password = 12345678;
let user = 'Vlad';
let userEmail = prompt(`Напишіть ваш email`);
if(email == userEmail){
    let login = prompt(`Введіть пароль для користувача ${user}`);
    if(password == login){
        alert(`Вітаю ${user}`);
    }else{
        alert(`Невірний пароль`);
    }
}else{
    alert(`Користувача з таким email не існує`);
}

