function displayMessage(type, title, message, time){
    let div = document.createElement(`div`);
    div.classList.add('message-box');

    let content = document.createElement(`div`);
    content.classList.add('message-content');
    content.classList.add(type);

    div.appendChild(content)

    let header = document.createElement(`div`);
    header.classList.add('message-header');
    header.innerText = title;

    let text = document.createElement(`div`);
    text.classList.add('message-text');
    text.innerText = message;

    let line = document.createElement(`div`);
    line.classList.add('message-time-line');

    content.appendChild(header);
    content.appendChild(text);
    content.appendChild(line);

    document.body.appendChild(div);

    line.style.width = '100%';
    let difference = 1000/time;

    let lineMove = setInterval(function(){
        line.style.width = `${Number(line.style.width.replace(`%`, ``)) - difference}%`
        if(Number(line.style.width.replace(`%`, ``)) - difference < 1){
            clearInterval(lineMove);
            document.body.removeChild(div)
        }
    }, 10)
}

displayMessage('message-success','Test ','Some test',4000)