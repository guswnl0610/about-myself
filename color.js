import ColorThief from './node_modules/colorthief/dist/color-thief.mjs'
const colorThief = new ColorThief();


function recolorBackground(mcolor, scolor){
    const body = document.querySelector('body');
    const navbar = document.querySelector('.navigation-bar');
    const card = document.querySelector(".card");
    const ptextspans = document.querySelectorAll(".ptext span");
    body.style.backgroundColor = `rgb(${mcolor[0]},${mcolor[1]},${mcolor[2]})`;
    navbar.style.backgroundColor = `rgb(${mcolor[0]},${mcolor[1]},${mcolor[2]})`;
    ptextspans.forEach((elem) => {
        elem.style.backgroundColor = `rgb(${mcolor[0]},${mcolor[1]},${mcolor[2]})`;
    });

    card.style.backgroundColor = `rgb(${scolor[0]},${scolor[1]},${scolor[2]})`;
}

function clickfunc(){
    let pal, domcolor, subdomcolor;
    if(this.complete) {
        pal = colorThief.getPalette(this);
        domcolor = colorThief.getColor(this);
    }
    else{
        Image.addEventListener('load', function() {
            pal = colorThief.getPalette(this);
            domcolor = colorThief.getColor(this);
        });
    }
    let colmin = 800, colidx;
    for(let i = 0; i < pal.length; i++){
        let difr,difg,difb;
        difr = (domcolor[0] - pal[i][0]) ? (domcolor[0] - pal[i][0]) : (domcolor[0] - pal[i][0])*-1;
        difg = (domcolor[1] - pal[i][1]) ? (domcolor[1] - pal[i][1]) : (domcolor[1] - pal[i][1])*-1;
        difb = (domcolor[2] - pal[i][2]) ? (domcolor[2] - pal[i][2]) : (domcolor[2] - pal[i][2])*-1;
        if(difr + difg + difb < colmin){
            colmin = difr + difg + difb;
            colidx = i;
        }
    }
    subdomcolor = pal[colidx];
    recolorBackground(domcolor,subdomcolor);
}

function addClickEvents(){
    const images = document.querySelectorAll(".fav-img");
    images.forEach(function(elem){
        elem.addEventListener('click', clickfunc);
    });
}

function init(){
    addClickEvents();
}

init();
