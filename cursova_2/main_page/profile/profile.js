let login = localStorage.getItem('login')
console.log(login)

function get_user_info(){
    db.collection('cursova_users').doc(login).get().then(res =>{
        let user_info = res.data();
        document.getElementById('name').value = user_info.name;
        document.getElementById('lastname').value = user_info.lastname;
        document.getElementById('email').value = user_info.email;
    })
}
get_user_info()

function edit(name,lastname,email){
   let elem =  document.getElementById(name)
    elem.removeAttribute('readonly');
    elem.classList.add('input_edit')
    document.getElementById(y).innerHTML = `
        <button onclick="save('${name}','${lastname}','${email}')">Зберегти</button>
    `
}

function save(){
  let info_user = {
   name: document.getElementById('name').value,
   lastname: document.getElementById('lastname').value,
   email: document.getElementById('email').value
  }
    
    db.collection('cursova_users').doc(login).set(info_user).then(res=>{
        console.log('успіх')
    })
}