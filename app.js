
'use strict';


//CUSTOMIZED CURSOR

let aniCursor = document.querySelector(".ani-cursor");
let hoverOver = document.querySelectorAll('.nav-links');

window.addEventListener('mousemove', anicursor);

//this function takes the position of aniCursor(which selects the css class 'ani-cursor') and provides default positioning,
//and tracking of mouse movement based on the users input. 
function anicursor(e) {
    console.log(e);

    aniCursor.style.top = e.clientY + 'px';
    aniCursor.style.left = e.clientX + 'px';
}

//creates the hover effect, when the mouse moves over a link, the css class 'cursor-change' is called.
//when it moves off a link, the 'cursor-change' class is removed. 
hoverOver.forEach(link => {
    link.addEventListener('mouseover', () => {
            aniCursor.classList.add('cursor-change')
    });
    link.addEventListener('mouseleave', () => {
        aniCursor.classList.remove('cursor-change')
    });
});

//SLIDESHOW

var slideArray = ['images/coffee-shop.jpg', 'images/college.jpg','images/house.jpg'];
var i = 0;
var transitionTime = 5000;

function slideShow() {
    document.getElementById('slideshow').src = slideArray[i];
    i++;
    if (i == slideArray.length) { i = 0; }
    setTimeout("slideShow()", transitionTime);
}
slideShow();

//ANIMATE HEROLANDING TEXT

$(document).ready(function () {
    $('h1.fade').fadeIn(5000).removeClass('fade');
});

$(document).ready(function () {
    $('h2.fade').fadeIn(5000).removeClass('fade');
});

//TOGGLES NAV 

function showNav() {
    var element = document.getElementById("nav-items");
    element.classList.toggle("show-items");
}