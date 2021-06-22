var count = 0;
var verification_over = false;

setInterval(() => {
    console.log(verification_over);
    if (verification_over == false) {
        if (count >= 1) {
            count = 0;
        } else {
            count++;
        }
        swapSlide();
    }
}, 4000);


function swapSlide() {

    var element = document.querySelectorAll(".container_banner .slide");

    for (let index = 0; index < element.length; index++) {
        if (count == index) {
            element[index].style.display = 'block';
        } else {
            element[index].style.display = 'none';
        }
    }

}

function prev() {
    if (count == 0) {
        count = 1;
    } else {
        count--;
    }
    swapSlide();
}

function next() {
    if (count >= 1) {
        count = 0;
    } else {
        count++;
    }
    swapSlide();
}

function mouseIn() {
    verification_over = true;
}
function mouseOut(){
    verification_over = false;
}

