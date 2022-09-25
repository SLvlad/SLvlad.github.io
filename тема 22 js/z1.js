function zagol(){
    let test = document.getElementById(`test`).value;
    let zagolovki = document.getElementById(`zagolovki`)
    let zag = ``;
    for(i=0; i<test; i++){
        zag += `<h1 class="a">Заголовок${i+1}</h1>`;
    }
    zagolovki.innerHTML = zag;
}
function changeColor(){
    let color = document.getElementById(`color`).value;
    let zagolovki = document.getElementsByClassName(`a`);
    Array.from(zagolovki).map(function(x){
        x.style.color = color;
    })
    console.log(zagolovki);
}