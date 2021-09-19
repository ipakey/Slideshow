const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide .image');
console.log(carouselImages);
console.log(carouselSlide);


//Buttons

const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//Button listeners

nextBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transforms 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';


});