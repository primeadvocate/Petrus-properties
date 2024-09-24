let slideImagesContainer = document.querySelector('.slides');
let slideImages = slideImagesContainer.querySelectorAll('img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1) {
        counter = 0;
    }
    else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
}

//code for prev button

prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0) {
        counter = slideImages.length-1;
    }
    else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
}

//Auto-sliding

function autoSliding() {
    deleteInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
    }
}
autoSliding();

//stop autosliding on mousehover
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function() {
    clearInterval(deleteInterval);
});

//resume sliding
container.addEventListener('mouseout', autoSliding);
