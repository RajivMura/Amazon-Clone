
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0; // Start from the first image

function changeSlide() {
    // Hide all images
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    // Show the current image
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', () => {
    // Move to the previous image
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1; // Loop back to the last image
    }
    changeSlide();
});

next_btn.addEventListener('click', () => {
    // Move to the next image
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0; // Loop back to the first image
    }
    changeSlide();
});


const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY
    })
}
