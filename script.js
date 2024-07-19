let index = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const sliderFixer = document.querySelector('.slider-fixer');
    sliderFixer.style.transform = `translateX(${-index * 100}%)`;
}
