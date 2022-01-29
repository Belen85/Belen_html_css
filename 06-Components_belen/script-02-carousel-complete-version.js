'use strict';
console.log('belen');

//BUILDING A SLIDER COMPONENT

// slides.forEach((v, i) => console.log(`${i} -> ${v}`));
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const dotContainer = document.querySelector('.dots');
console.log(dotContainer);

let currentSlide = 0;
const maxSlide = slides.length;
console.log(maxSlide);

// slides.forEach(
//   (s, i) => (s.style.transform = `translate(${100 * (i - 1)}%, -50%)`)
// );

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translate(${100 * (i - slide)}%, -50%)`)
  );
};

goToSlide(0);

const createDots = function () {
  slides.forEach((_, i) =>
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dot" data-slide="${i}"></button>`
    )
  );
};

createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dot')
    .forEach(dot => dot.classList.remove('dot--active'));
  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add('dot--active');
};

activateDot(0);

//Nex slide

const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);

//Previous slide
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

btnLeft.addEventListener('click', prevSlide);

dotContainer.addEventListener('click', function (e) {
  // console.log(e.target);
  if (e.target.classList.contains('dot')) {
    const slide = e.target.dataset.slide;
    // console.log(slide);
    goToSlide(slide);
    activateDot(slide);
  }
});
