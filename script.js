const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const sliders = document.querySelectorAll('.slider');
const body = document.body;

let activeSlider = 0;

rightArrow.addEventListener('click', () => {
  activeSlider++;

  if (activeSlider > sliders.length - 1) {
    activeSlider = 0;
  }
  setBgToBody();
  setActiveSlider();
});

leftArrow.addEventListener('click', () => {
  activeSlider--;

  if (activeSlider < 0) {
    activeSlider = sliders.length - 1;
  }
  setBgToBody();
  setActiveSlider();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = sliders[activeSlider].style.backgroundImage;
}

function setActiveSlider() {
  sliders.forEach((slider) => {
    slider.classList.remove('active');
  });

  sliders[activeSlider].classList.add('active');
}
