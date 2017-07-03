var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length} ;
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
}
x[slideIndex-1].style.display = "block";
}




  var myIndex = 0;
  carousel();
  function carousel() {
      var imgSlide = document.getElementsByClassName("imageSlide");

        for (var i = 0; i < imgSlide.length; i++) {
           imgSlide[i].style.display = "none";
      }

      myIndex++;

      if (myIndex > imgSlide.length){
        myIndex = 1;
      }
      imgSlide[myIndex-1].style.display = "block";
      setTimeout(carousel, 10000);
  }
