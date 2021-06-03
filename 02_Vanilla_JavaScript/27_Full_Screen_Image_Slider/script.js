let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

// Clear all images
function reset() {
    sliderImages.forEach((image) => {
        image.style.display = 'none';
    })
}

// Init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
    reset();
    current === 0 ? current = sliderImages.length : current = current;
    // if (current === 0) {
    //     current = sliderImages.length;
    // }
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Show next
function slideRight() {
    reset();
    current === sliderImages.length ? current = 0 : current = current;
    // if (current === sliderImages.length - 1) {
    //     current = 0;
    // }
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Event listener
arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);

startSlide();
