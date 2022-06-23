const images = document.querySelectorAll(".row-25 .image img");

[...images].forEach((item) => item.addEventListener("click", handleZoomImage));

function handleZoomImage(event) {
  event.stopPropagation();
  const image = event.target.getAttribute("src");
  const template = `
    <div class="lightbox">
    <div class="lightbox-content">
    <i class="fa fa-angle-left lightbox-prev"></i>
    <img
    src="${image}"
    alt=""
    class="lightbox-image"
    />
    <i class="fa fa-angle-right lightbox-next"></i>
    </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}

document.body.addEventListener("click", function (event) {
  const lightImage = document.querySelector(".lightbox-image");
  let lightSrc = "";
  let index = 0;
  lightSrc = lightImage.getAttribute("src");
  index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightSrc
  );
  if (event.target.matches(".lightbox")) {
    event.target.parentNode.removeChild(event.target);
  } else if (event.target.matches(".lightbox-next")) {
    index++;
    if (index > images.length - 1) {
      index = 0;
    }
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
  } else if (event.target.matches(".lightbox-prev")) {
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
  }
});

const sliderImages = [
  "../img/slider-image-02.jpg",
  "../img/slider-image-03.jpg",
];

const slider = document.querySelector("header");

slider.style.backgroundImage = `url('${sliderImages[1]}')`;
