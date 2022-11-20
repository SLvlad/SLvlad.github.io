let slides = document.querySelector(`.slides`);
let slides_num = document.querySelectorAll(`.slide`);
function slideLeft(){
    if(getMargin()>= -((slides_num.length - 2) * 500)){
        slides.style.marginLeft = `${getMargin()-500}px`;
    }
    
}
function slideRight(){
    if(getMargin() < 0){
       slides.style.marginLeft = `${getMargin()+500}px` 
    }
    ;
}

function getMargin(){
    return Number(slides.style.marginLeft.replace('px',''))
}