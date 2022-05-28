let btn1 = document.getElementById('one')
let btn2 = document.getElementById('two')
let btn3 = document.getElementById('three')
let btn4 = document.getElementById('four')
let btn5 = document.getElementById('five')
let submitBtn = document.getElementById('submit-btn')

let noOfStars = document.getElementById('no-of-stars')

let frontSec = document.getElementById('front-section')
let backSec = document.getElementById('back-section')



btn1.addEventListener('click', function () {
    btn1.style.background = "hsl(25, 97%, 53%)";
    btn1.style.color = "white";

    btn2.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn2.style.color = "hsl(217, 12%, 63%)";

    btn3.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn3.style.color = "hsl(217, 12%, 63%)";

    btn4.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn4.style.color = "hsl(217, 12%, 63%)";

    btn5.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn5.style.color = "hsl(217, 12%, 63%)";

    noOfStars.innerText = 1



})

btn2.addEventListener('click', function () {


    btn1.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn1.style.color = "hsl(217, 12%, 63%)";

    btn2.style.background = "hsl(25, 97%, 53%)";
    btn2.style.color = "white";

    btn3.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn3.style.color = "hsl(217, 12%, 63%)";

    btn4.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn4.style.color = "hsl(217, 12%, 63%)";

    btn5.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn5.style.color = "hsl(217, 12%, 63%)";

    noOfStars.innerText = 2;

})

btn3.addEventListener('click', function () {

    btn1.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn2.style.color = "hsl(217, 12%, 63%)";

    btn2.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn2.style.color = "hsl(217, 12%, 63%)";

    btn3.style.background = "hsl(25, 97%, 53%)";
    btn3.style.color = "white";

    btn4.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn4.style.color = "hsl(217, 12%, 63%)";

    btn5.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn5.style.color = "hsl(217, 12%, 63%)";

    noOfStars.innerText = 3;

})


btn4.addEventListener('click', function () {
    btn1.style.background = "hsla(216, 12%, 54%, 0.2";
    btn1.style.color = "hsl(217, 12%, 63%)";

    btn2.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn2.style.color = "hsl(217, 12%, 63%)";

    btn3.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn3.style.color = "hsl(217, 12%, 63%)";

    btn4.style.background = "hsl(25, 97%, 53%)";
    btn4.style.color = "white";

    btn5.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn5.style.color = "hsl(217, 12%, 63%)";

    noOfStars.innerText = 4;

})


btn5.addEventListener('click', function () {
    btn1.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn1.style.color = "hsl(217, 12%, 63%)";

    btn2.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn2.style.color = "hsl(217, 12%, 63%)";

    btn3.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn3.style.color = "hsl(217, 12%, 63%)";

    btn4.style.background = "hsla(216, 12%, 54%, 0.2)";
    btn4.style.color = "hsl(217, 12%, 63%)";

    btn5.style.background = "hsl(25, 97%, 53%)";
    btn5.style.color = "white";

    noOfStars.innerText = 5;

})

submitBtn.addEventListener('click', function () {

    backSec.style.display = 'block';
    frontSec.style.display = 'none';

})  