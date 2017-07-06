var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var imgSlide = document.getElementsByClassName("mySlides");
 if (n > imgSlide.length) {slideIndex = 1}
 if (n < 1) {slideIndex = imgSlide.length}

  for (var i = 0; i < imgSlide.length; i++) {
    imgSlide[i].style.display = "none";
  }
  imgSlide[slideIndex-1].style.display = "block";
}
