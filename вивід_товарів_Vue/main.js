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

let info = {
    text: 'Привіт',
    all_products: [],
    all_products_copy: []
}

const tovar_component = {
    props:['tov'],
    template: `
    <div class="tovar">
        <p>Назва: {{tov.name}}</p>
        <p>Виробник: {{tov.developer}}</p>
        <p>Картинка: {{tov.img}}</p>
        <p>Ціна: {{tov.price}}</p>
        <p>Відгуки: {{tov.reviews}}</p>
        <p>Тип: {{tov.type}}</p>
   </div>
    `
}

const vue_app = {
    data(){
        return info;
    },
    methods:{
        getFBprods(){
            db.collection('kursova_tovari').get().then(res =>{
                res.forEach(doc => {
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
        'tovar' : tovar_component
    },
    mounted(){
        this.getFBprods()
    }
}
Vue.createApp(vue_app).mount('#app')