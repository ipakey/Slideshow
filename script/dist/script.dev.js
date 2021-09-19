"use strict";

var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide .image');
console.log(carouselImages);
console.log(carouselSlide); //Buttons

var prevButton = document.querySelector('#prevBtn');
var nextButton = document.querySelector('#nextBtn'); //counter

var counter = 1;
var size = carouselImages[1].clientWidth;
carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)'; //Button listeners

nextBtn.addEventListener('click', function () {
  carouselSlide.style.transition = "transforms 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});