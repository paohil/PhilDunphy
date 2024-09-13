// Simple form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message, we will get back to you shortly!');
});


let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Remove active class from all slides
        if (i === index) {
            slide.classList.add('active'); // Add active class to the current slide
        }
    });
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
    showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide every 2 seconds
setInterval(nextSlide, 2000);

// Optional: Ensure script runs after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


 // JavaScript for smooth scrolling
 document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });