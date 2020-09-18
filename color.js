import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'

const colorThief = new ColorThief();
const images = document.querySelectorAll(".fav-img");


if(img.complete){
    console.log(colorThief.getColor(img));
}
else{
    Image.addEventListener('load', function() {
        colorThief.getColor(img);
    });
}

function addClickEvents(){
    
}

function init(){


}

init();
