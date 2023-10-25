const firebaseConfig = {
    apiKey: "AIzaSyD5zdxHnEJ-sg9DAEWU2VY5sl0C_MaC2G8",
    authDomain: "studylinkv.firebaseapp.com",
    projectId: "studylinkv",
    storageBucket: "studylinkv.appspot.com",
    messagingSenderId: "220527342329",
    appId: "1:220527342329:web:df3da44a2107c6fca12828"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let vsi_tovari=[]
function drawTovars(){
    let tovari = document.getElementById('tovari');
    tovari.innerHTML = ''
    db.collection('phones').get().then(res => {
        res.forEach(doc  =>{
            let tovar = doc.data();
            tovar.id = doc.id;
            tovar.count = 1;
            vsi_tovari.push(tovar)
            tovari.innerHTML += `
        <div class="tovar">
            <p>Назва: ${tovar.name}</p>
            <p>Картинка:${tovar.img}</p>
            <p>Діагональ:${tovar.display}</p>
            <p>Акумулятор:${tovar.accumulyator}</p>
            <p>Ціна: ${tovar.price}</p>
            <button onclick="saveLocal(${vsi_tovari.length-1})">Купити</button>
        </div>
            `
            
        })
    })
}
drawTovars()

function saveLocal(index){
    let loc_tovars = getLocal();
 
    let tovar = loc_tovars.findIndex(car => car.id === vsi_tovari[index].id);
      
    if(tovar === -1){
        loc_tovars.push(vsi_tovari[index])
    }else{
        loc_tovars[tovar].count++
    }
    
    console.log(tovar)

   
    localStorage.setItem('prod', JSON.stringify(loc_tovars))
   
}

function getLocal(){
   let prod =  JSON.parse(localStorage.getItem('prod'));
    if(prod === null){
        return []
    }else{
        return prod
    }

}