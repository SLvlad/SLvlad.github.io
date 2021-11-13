let  chusla = [4, 8, 2, 9, 32, 12];
let MAX = chusla[0];
let MIN = chusla[0];
for(i=0; i < chusla.length; i++){
if(MAX < chusla[i]){
    MAX = chusla[i]


}if(MIN > chusla[i]){
    MIN = chusla[i];
}
}



console.log(`MAX - ${MAX}`);
console.log(`MIN - ${MIN}`);
console.log(chusla);
