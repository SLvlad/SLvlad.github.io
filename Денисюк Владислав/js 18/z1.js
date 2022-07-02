function vivodText(){
    let text = document.getElementById(`text`).value;
    localStorage.setItem(`text`,text);
    storageText()
}

function storageText(){
    let text = localStorage.getItem(`text`);
    let text2 = document.getElementById(`stored_text`);
    stored_text.innerText = text;
    
    
}
function clean(){
    localStorage.clear();
    stored_text.innerText = ``;
}

function zamina(){
    let text = localStorage.getItem(`text`);
    text = document.getElementById(`text`).value = text;
}
storageText();