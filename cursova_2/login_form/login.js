function googleVhid(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
        console.log(result)
        console.log(user)
        db.collection('reg_test').doc(user.uid).get().then(res=>{
          if(res.__document == null){
          createUser(user.uid, email, password,'')
          }else{


          }
        })
       
        localStorage.setItem('login',user.uid)
        setTimeout(function(){
          window.location.href = `../main_page/main.html?id=${user.uid}`
        },3000)
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
    });
}

function email_pass_vhid(){
   
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(userCredential)
    console.log(user)
    createUser(user.uid,name2.value,lastname.value,email.value)
    localStorage.setItem('login',user.uid)
    setTimeout(function(){
      window.location.href = `../../main_page/main.html?id=${user.uid}`
    },3000)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
}


function createUser(id,imya,prizv,email){
    let user = {
        name: imya,
        lastname: prizv,
        email: email
    }
    console.log(user)
    db.collection('cursova_users').doc(id).set(user).then(res => {
        console.log('успіх')
    })
    console.log('усіх')
}


function checkUser(){
  let chek = localStorage.getItem('login')
  if(chek != null){
    window.location.href = `../main_page/main.html?id=${chek}`
  }
}
//checkUser()
let status = 'поля реєстрації'


function changeForm(){
  if(status == 'поля реєстрації'){
  form.innerHTML = `
  <label >Пошта</label><br>
  <input type="text" id="email_vhid"><br><br>
  <label >Пароль</label><br>
  <input type="text" id="password_vhid"><br><br>
  <button onclick="real_vhid_email_pass()">Увійти</button><br><br>
  <button onclick="googleVhid()">Вхід за допомогою гугл</button><br>
  <button onclick="changeForm()">Зареєструвати аккаунт</button>
  `
  status = 'поля входу'
  }else{
    form.innerHTML = `
    <label >Iм'я</label><br>
    <input type="text" id="nam"><br><br>
    <label >Прізвище</label><br>
    <input type="text" id="lastname"><br><br>
    <label >Вік</label><br>
    <input type="text" id="age"><br><br>
    <label >Пошта</label><br>
    <input type="text" id="email"><br><br>
    <label >Пароль</label><br>
    <input type="text" id="password"><br><br>
    <button onclick="email_pass_vhid()">ЗАреєструватись</button><br><br>
    <button onclick="googleVhid()">Вхід за допомогою гугл</button><br>
    <button onclick="changeForm()">У мене вже є аккаунт</button>
    `
    status = 'поля реєстрації'
  }
}


function real_vhid_email_pass(){
  firebase.auth().signInWithEmailAndPassword(document.getElementById('email_vhid').value, password_vhid.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('login',user.uid)
    setTimeout(function(){
      window.location.href = `../main_page/main.html?id=${user.uid}`
    },3000)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}




function hide(id){
  document.getElementById(id).setAttribute('style','display:none;')
}
function show(id){
  document.getElementById(id).removeAttribute('style')
}

function showPassword(){
  let password = document.querySelector('password_img');
  let input = document.querySelector('')
}
showPassword()