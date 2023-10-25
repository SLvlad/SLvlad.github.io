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
let info = {
    text:`Привіт`,
    all_products: [],
    all_products_copy: []
}

const tovar_component = {
    props:['tov'],
    template:`
    <div class="tovar">
        <p>Назва:{{tov.name}}</p>
        <p>Виробник:{{tov.developer}}</p>
        <p>Картинка:{{tov.img}}</p>
        <p>Тип товару:{{tov.type}}</p>
        <p>Колір:{{tov.color}}</p>
        <p>Відгуки:{{tov.rewievs}}</p>
        <p>Ціна:{{tov.price}}</p>
    </div>
    `
}

const vue_app = {
    data(){
        return info;
    },
    methods:{
        getFBprods(){
            db.collection('all_products').get().then(res =>{
                res.forEach(doc =>{
                   let prod = doc.data();
                    prod.id = doc.id;
                    prod.count = 1;
                this.all_products.push(prod) 
                })
                
            })
            this.all_products_copy = this.all_products
        },
        tovar_filter(type){
            this.oziviti_all_products()
            this.all_products = this.all_products.filter(prod =>{
                return prod.type == type;
            })
            console.log(this.all_products)
            
        },
        oziviti_all_products(){
                this.all_products = this.all_products_copy;
                console.log(this.all_products)
            }
    },
    components:{
        'tovar': tovar_component
    },
    mounted(){
        this.getFBprods()
    }
}

Vue.createApp(vue_app).mount('#app')