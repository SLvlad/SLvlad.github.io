const firebaseConfig = {
    apiKey: "AIzaSyDLxX3GRuHSBX0nsdfJKCIoimvzlmD8aZQ",
    authDomain: "studylinkvlad.firebaseapp.com",
    projectId: "studylinkvlad",
    storageBucket: "studylinkvlad.appspot.com",
    messagingSenderId: "758503050538",
    appId: "1:758503050538:web:aab60135cda02a6c8d2253"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


function showModal(id){
    document.getElementById(id).classList.add('show')
    }

function hideModal(id){
    document.getElementById(id).classList.remove('show')
    }
    let all_products = []
    let nomer = 0;
function addUser(){
        let user = {
            name: document.getElementById('name').value,
            developer: document.getElementById('developer').value,
            img: document.getElementById('img').value,
            rewievs:document.getElementById('rewievs').value,
            type:document.getElementById('type').value,
            price:document.getElementById('price').value
        }
        console.log(user)
        db.collection("all_products").add(user).then(function(){
            console.log('Додано')
            hideModal('newTaskModal')
            location.reload()
        })
    }
    
    
    function drawUsers(){
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = '';
        let index = 1;
        db.collection("all_products").get().then(res => {
            res.forEach(function(doc){
                let tovar = doc.data();
                tovar.id = doc.id;
                all_products.push(tovar)
                
                tbody.innerHTML += `
                <tr>
                <th scope="row">${index}</th>
                <td>${tovar.name} 
                <td>${tovar.developer}</td>
                <td>${tovar.img}</td>
                <td>${tovar.price}</td>
                <td>${tovar.rewievs}</td>
                <td>${tovar.type}</td>
                <td class="text-center"><button class="btn btn-warning btn-sm" onclick="edit(${nomer})">Редагувати</button></td>
                <td class="text-center"><button class="btn btn-danger btn-sm" onclick="delUser('${tovar.id}')">x</button></td>
              </tr>
                `
                nomer++
                index++
            })
        })
    }
    
    
    drawUsers()
    
    
    function SaveEditUser(id){
        let user = {
            name: document.getElementById('name_edit').value,
            developer: document.getElementById('developer_edit').value,
            img: document.getElementById('img_edit').value,
            price: document.getElementById('price_edit').value,
            rewievs:document.getElementById('rewievs_edit').value,
            type:document.getElementById('type_edit').value,
            price:document.getElementById('price_edit').value
        }

        console.log(user)
        db.collection("all_products").doc(id).set(user).then(function(){
            console.log('Оновлено')
            hideModal('editTaskModal')
            location.reload()
        })
    }
    
    
    function edit(index){
       document.getElementById('name_edit').value = all_products[index].name;
        document.getElementById('developer_edit').value = all_products[index].developer;
        document.getElementById('img_edit').value = all_products[index].img;
        document.getElementById('price_edit').value = all_products[index].price;
        document.getElementById('rewievs_edit').value = all_products[index].rewievs;
        document.getElementById('price_edit').value = all_products[index].type;
        showModal('editTaskModal')
        document.getElementById('saveEd').setAttribute('onclick', `SaveEditUser("${all_products[index].id}")`)
    }
    
    
    function delUser(userId){
        db.collection('all_products').doc(userId).delete().then(function(){
            location.reload()
        })
        
    }
    
    
    
    
    