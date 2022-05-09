const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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




const hosp = document.querySelectorAll('.typewriter');


observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('typewriter');
    } else {
      entry.target.classList.remove('typewriter');
    }
  });
});

hosp.forEach(hosp => {
  observer.observe(hosp);
});



// Fly In left 
var elem2 = $(".contact");
function isScrolledIntoView(elem2) {
    var docViewTop = $(window).scrollTop() + 400;
    var docViewBottom = docViewTop + $(window).height() - 400;
	
    var elemTop = elem2.offset().top;
    var elemBottom = elemTop + elem2.height();
	
    return (docViewBottom <= elemBottom && elemTop <= docViewTop);
}
$(document).on("scroll", function () {
    if (isScrolledIntoView(elem2)) {
        elem2.addClass("fll");
				elem2.show();
				elem2.css('opacity', '1');
    }
});



