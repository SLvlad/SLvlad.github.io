let user_id = localStorage.getItem('user_id')
console.log(user_id)
/*
function get_user_info(){
    db.collection('users').doc(user_id).get().then(res =>{
        let user_info = res.data();
        document.getElementById('name').value = user_info.name;
        document.getElementById('lastname').value = user_info.lastname;
        document.getElementById('email').value = user_info.email;
        document.getElementById('password').value = user_info.password;
    })
}
get_user_info()

function edit(x,y){
   let elem =  document.getElementById(x)
    elem.removeAttribute('readonly');
    elem.classList.add('input_edit')
    document.getElementById(y).innerHTML = `
        <button onclick="save('${x}','${y}')">Зберегти</button>
    `
}
function save(x1,y1){
    let elem =  document.getElementById(x1)
    elem.setAttribute('readonly','');
    elem.classList.remove('input_edit')
    document.getElementById(y1).innerHTML = `
        
    `
    var updateData = {};
  updateData[x1] = elem.value;

    
    db.collection('users').doc(user_id).update(updateData).then(res=>{
        console.log('успіх')
    })
}
*/
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');


uploadButton.addEventListener('click', () => {
  const file = fileInput.files[0];
  const storageRef = firebase.storage().ref();


  // Генерувати унікальний ідентифікатор для завантаженого фото
  const uniqueId = new Date().getTime().toString();
  const photoRef = storageRef.child(`profileFotos/${uniqueId}.jpg`);
    console.log(uniqueId)
  photoRef.put(file).then(snapshot => {
    console.log('Фото завантажено успішно.');


    // Отримати URL завантаженого фото
    snapshot.ref.getDownloadURL().then(downloadURL => {
      console.log('URL завантаженого фото:', downloadURL);


      // Відобразити завантажене фото на сторінці (якщо потрібно)
     
    });
  }).catch(error => {
    console.error('Помилка завантаження фото:', error);
  });
});