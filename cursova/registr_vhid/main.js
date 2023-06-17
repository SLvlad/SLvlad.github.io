var provider = new firebase.auth.GoogleAuthProvider();
function googleVhid(){
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
        console.log(result)
        console.log(user)
        createUser(user.uid,'','','')
        localStorage.setItem('login',user.uid)
        setTimeout(function(){
          window.location.href = `spa.html?id=${user.uid}`
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
    createUser(user.uid,nam.value,lastname.value,age.value)
    localStorage.setItem('login',user.uid)
    setTimeout(function(){
      window.location.href = `spa.html?id=${user.uid}`
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

function createUser(id,imya,prizv,vik){
    let user = {
        name: imya,
        lastname: prizv,
        age: vik
    }
    console.log(user)
    db.collection('reg_test').doc(id).set(user).then(res => {
        console.log('успіх')
    })
    console.log('усіх')
}

function checkUser(){
  let chek = localStorage.getItem('login')
  if(chek != null){
    window.location.href = `spa.html?id=${chek}`
  }
}
checkUser()
let status = `реєстрація`
function changeForm(){
  if(status == `реєстрація`){

  
  form.innerHTML = `
  <label >Пошта</label><br>
  <input type="text" id="email_vhid"><br><br>
  <label >Пароль</label><br>
  <input type="text" id="password_vhid"><br><br>
  <button onclick="real_vhid_email_pass()">Вхід</button><br><br>
  <button onclick="googleVhid()">Вхід за допомогою гугл</button><br>
  <button onclick="changeForm()">Зареєструвати аккаунт</button>
</div> 
  `
  status = `вхід`
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
    <button onclick="changeForm()">В мене вже є аккаунт</button>
    `
    status = `реєстрація`
  }
}

function real_vhid_email_pass(){
  firebase.auth().signInWithEmailAndPassword(email_vhid.value, password_vhid.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    localStorage.setItem('login',user.uid)
    setTimeout(function(){
      window.location.href = `spa.html?id=${user.uid}`
    },3000)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}