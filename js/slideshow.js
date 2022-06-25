const sliderImages = [
  "../img/slider-image-01.jpg",
  "../img/slider-image-02.jpg",
  "../img/slider-image-03.jpg",

];

const slider = document.querySelector("header");
let index = 0;

setInterval(() => {
  index++;
  if (index >= sliderImages.length) {
    index = 0;
  }
  changeSlider(index);
}, 3000);
function changeSlider(index) {
  slider.style.backgroundImage = `url('${sliderImages[index]}')`;
}
