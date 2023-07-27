// JavaScript pour le diaporama
const slideshow = document.querySelector('.slideshow');
const images = slideshow.querySelectorAll('img');

let index = 0;

function changeSlide() {
    images[index].classList.remove('visible');
    index = (index + 1) % images.length;
    images[index].classList.add('visible');
}

setInterval(changeSlide, 5000);
