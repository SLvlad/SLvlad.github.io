function test(){

balu = 0;
if(document.getElementById(`q1`).value == "дерево"){
    balu++
}
if(document.getElementById(`q2`).value == "Влад"){
    balu++
}
if(document.getElementById(`q3`).value == 4){
    balu++
}
if(document.getElementById(`q4`).value == 12){
    balu++
}
if(document.getElementById(`q5`).value == 2022){
    balu++
}
if(document.getElementById(`q6`).value == 16){
    balu++  
}
let rezults = document.getElementById(`rezults`)
rezults.innerHTML = `<h1>Ваш результат - ${balu}<h1>`

}