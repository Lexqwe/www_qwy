const slider = document.querySelector(".banner-slider");
const dotList = document.querySelector(".banner-pointslist");
const prevButton = document.querySelector(".banner-prev-button");
const nextButton = document.querySelector(".banner-next-button");
const slides = Array.from(slider.querySelectorAll(".banner-img"));
const slideCount = slides.length;
const dots = Array.from(dotList.querySelectorAll(".banner-point"))
const dotsCount = dots.length;
let slideIndex = 0;

//обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateDotPannel(){

}
// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.style.backgroundColor = "#f86c6c";
    } else {
      dot.style.backgroundColor = "#D5D5D5";
    }
  });
}

// Инициализация слайдера
updateSlider();