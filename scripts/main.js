let slideIndex = 1;
showSlidesAuto(slideIndex);

function plusSlidesAuto(n) {
  showSlidesAuto((slideIndex += n));
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlidesAuto(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => {
    plusSlidesAuto(1);
  }, 5000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
