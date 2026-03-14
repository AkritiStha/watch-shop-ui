let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
  let previousIndex = slideIndex;
  slideIndex = (slideIndex + 1) % slides.length; // Cycle through images

  // Ensure one image is always visible
  slides[previousIndex].style.opacity = "0"; // Fade out previous image
  slides[slideIndex].style.opacity = "1"; // Fade in new image

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Initialize slideshow
for (let i = 0; i < slides.length; i++) {
  slides[i].style.position = "absolute"; // Stack images on top of each other
  slides[i].style.opacity = i === 0 ? "1" : "0"; // First image visible, others hidden
  slides[i].style.transition = "opacity 1s ease-in-out"; // Smooth fade effect
}
showSlides();
