
let submitBtn = document.getElementById('submit-btn')

let noOfStars = document.getElementById('no-of-stars')

let frontSec = document.getElementById('front-section')
let backSec = document.getElementById('back-section')




function ratingStars(value) {
    noOfStars.innerText = value;
}

submitBtn.addEventListener('click', function () {

    backSec.style.display = 'block';
    frontSec.style.display = 'none';

})  