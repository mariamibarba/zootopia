let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// brands


// let currentScrollposition = 0;
// let scrollAmount = 320;


// const sCont = document.querySelector(".storys-container");
// const hScroll= document.querySelector(".horizontal-scroll");
// const btnScrollleft = document.querySelector("#btn-scrol-left");
// const btnScrollright = document.querySelector("#btn-scrol-right");
// btnScrollleft.style.opacity = "0";


// let maxScroll = -sCont.offsetwidth + hScroll.offsetwidth;


// function scrollyhorizontally(val){
//   currentScrollposition += (val+scrollAmount);
//   if(currentScrollposition > 0){
//     currentScrollposition = 0
//     btnScrollleft.style.opacity = "0";
//   }else{
//     btnScrollleft.style.opacity = "1";
//   }
//   if(currentScrollposition < maxScroll){
//     currentScrollposition = maxScroll;
//     btnScrollright.style.opacity = "0";
//   }else{
//     btnScrollright.style.opacity = "1";
//   }

//   sCont.style.left = currentScrollposition +"px";

// }