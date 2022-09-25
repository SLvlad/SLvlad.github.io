function addCards(){
    let cards_num = document.getElementById(`cards_num`).value;
    let cards = document.getElementById(`cards`);
    let card = ``;
    for(i=0;i<cards_num;i++){
        card += `<div class="card">
        <div class="card-body my-2">
          <h5 class="card-title">Card ${i+1}</h5>
        </div>
      </div>`;

      cards.innerHTML = card;
    }
}

function textColor(){
    let cards_text = document.getElementById(`cards_text`).value;
    let card_name = document.getElementsByClassName(`card-title`);
    Array.from(card_name).map(function(x){
        x.style.color = cards_text;
    })
    console.log(card_name);
}


function backgroundColor(){
    let cards_backround = document.getElementById(`card-body my-2`).value;
    let card_color = document.getElementsByClassName(`card-body my-2`);
    Array.from(card_color).map(function(x){
        x.style.color = cards_backround;
    })
}