function register(){
    let name = document.getElementById(`name`).value;
    let email = document.getElementById(`email`).value;
    let password = document.getElementById(`password`).value;
    let user = {
        name: name,
        email: email,
        password: password
    }
    localStorage.setItem(`users`,JSON.stringify(user))
}

function showError(){
    if(name.length < 4 || email.length < 8 || password.length < 8){
        document.getElementById(`message`).innerHTML = `<div class="alert alert-danger col-6">Помилка</div>`;
        setTimeout(function(){
            document.getElementById(`message`).innerHTML = ` `;
        },1000);
    }else{
        document.getElementById(`message`).innerHTML = `<div class="alert alert-success col-6">Успіх</div>`;
            setTimeout(function(){
                document.getElementById(`message`).innerHTML = ` `;
            },1000);
        }
    };
