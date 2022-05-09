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


let observedElements = document.querySelectorAll('.contact'); // Define the elements you want to intiate an action on

const options = { //define your options
  threshold: 0.5 //50% of the element in view
}

const inViewCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // define the event/property you want to use
      entry.target.classList.add('contact');
      //do something with the element
    }
  });
}
let observer = new IntersectionObserver(inViewCallback,options); // create a new instance using our callback which contains our elements and actions, using the options we defined

observedElements.forEach(element => {
  observer.observe(element) // run the observer 
});

// Apply Animation Classes strictly through Javascript for graceful degradation. 

	/* observedElements.forEach(entry => {
			entry.classList.add('animated');
	}); 

// Alternatively, can be placed directly in markup

let animatedElements = document.querySelectorAll('.animated');
animatedElements.forEach(entry => {
    entry.className  += " animated";
});

*/

