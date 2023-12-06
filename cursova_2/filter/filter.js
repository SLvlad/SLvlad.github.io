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

let all_tovars = []

function malyvati(x){
    команди,які малюють з цього масиву(x)
}
malyvati(all_tovars)
function getTovars(){
  
    db.collection(tovar_type.value).get().then(res =>{
        res.forEach(doc => {
            let obj = doc.data();
            obj.id = doc.id;
            all_tovars.push(obj)
        })
    })
    console.log(all_tovars)
}

function filter(){
    let new_phones = all_tovars.slice();
    if(min_price.value.length > 0){
		all_tovars =  all_tovars.filter( function(phone){
			return min_price.value <= phone.price
		})
	}
	if(max_price.value.length > 0){
		all_tovars =  all_tovars.filter( function(phone){
			return max_price.value >= phone.price
		})
	}
    console.log(new_phones)
    malyvati(new_phones)
}