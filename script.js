// JavaScript code for the counter
document.addEventListener('DOMContentLoaded', function () {
  // Counter element
  var counterElement = document.querySelector('.counter');

  // Start count from 0
  var count = 0;

  // Function to update the counter
  function updateCounter() {
    // Update the counter text
    counterElement.textContent = count;

    // Increment count
    count++;

    // Call updateCounter() every secondشئء
    setTimeout(updateCounter, 1000);
  }

  // Call updateCounter() initially
  updateCounter();
});

// JavaScript code for slider functionality
document.addEventListener('DOMContentLoaded', function () {
  var slider = document.querySelector('.about-slider');
  var images = slider.querySelectorAll('img');
  var currentIndex = 0;

  function showImage(index) {
    images.forEach(function (image, i) {
      if (i === index) {
        image.style.transform = 'translateX(0)';
      } else {
        image.style.transform = 'translateX(-100%)';
      }
    });
  }

  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    showImage(currentIndex);
  }

  // Show the first image initially
  showImage(currentIndex);


  // Auto advance to next image every 3 seconds
  setInterval(nextImage, 3000);
});
// JavaScript code for slider functionality
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.services-slide');
  var currentIndex = 0;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      if (i === index) {
        slide.classList.remove('hidden');
      } else {
        slide.classList.add('hidden');
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Auto advance to next slide every 3 seconds
  setInterval(nextSlide, 3000);
});
