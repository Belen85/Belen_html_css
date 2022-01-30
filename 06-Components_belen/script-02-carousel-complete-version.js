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

/**
 *
 * @param {Number} the slide number to be rendered
 * @returns {side-efect} add the style transform to change the position of each slide based on the slide number
 * @author Belen Rodriguez
 */
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translate(${100 * (i - slide)}%, -50%)`)
  );
};

goToSlide(0);

/**
 * @param {}
 * @returns {side-efect} add to the dotContainer one button for each of the slides
 * @author Belen Rodriguez
 */
const createDots = function () {
  slides.forEach((_, i) =>
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dot" data-slide="${i}"></button>`
    )
  );
};

createDots();

/**
 *
 * @param {slide} the slide number to be rendered
 * @return {side-efect} remove the class dot--active for each dot and add the class dot-active to the current slide
 * @author Belen Rodriguez
 */
const activateDot = function (slide) {
  document
    .querySelectorAll('.dot')
    .forEach(dot => dot.classList.remove('dot--active'));
  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add('dot--active');
};

activateDot(0);

//Next slide

/**
 * @param {}
 * @returns {function} goToSlide and activateDot
 */
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

//Add eventListener to the btn Right
btnRight.addEventListener('click', nextSlide);

//Previous slide

/**
 * @param {}
 * @returns {function} goToSlide and activateDot
 */
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

//Add eventListener to the btn Left
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
