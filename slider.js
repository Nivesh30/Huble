window.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const images = carousel.getElementsByTagName('img');
  const pagination = document.querySelector('.pagination');
  const paginationButtons = [];

  let currentIndex = 0;
  const intervalTime = 3000; // Time between slide transitions in milliseconds
  let slideInterval;

  // Adjust the number of images displayed based on screen size
  function adjustCarousel() {
    const screenWidth = window.innerWidth;
    let imageCount = 5;

    if (screenWidth <= 768) {
      imageCount = Math.min(3, images.length); // Adjust the number of images for smaller screens
    }

    carousel.style.width = (imageCount + 2) * 100 + '%'; // Add 2 extra images for infinite sliding

    for (let i = 0; i < images.length; i++) {
      images[i].style.width = 100 / (imageCount + 2) + '%'; // Add 2 extra images for infinite sliding
    }

    createPagination(imageCount);
    startSlideInterval();
    updateCarouselPosition();
  }

  // Create pagination buttons for mobile devices
  function createPagination(imageCount) {
    pagination.innerHTML = '';
    paginationButtons.length = 0;

    if (window.innerWidth <= 768) {
      for (let i = 0; i < imageCount; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', function() {
          goToSlide(i);
        });
        pagination.appendChild(button);
        paginationButtons.push(button);
      }

      paginationButtons[0].classList.add('active');
    }
  }

  // Go to the selected slide
  function goToSlide(index) {
    currentIndex = index + 1; // Adjust the index to account for the extra initial image
    updateCarouselPosition();
    updatePagination();
    restartSlideInterval();
  }

  // Update the carousel position
  function updateCarouselPosition() {
    carousel.style.transform = 'translateX(' + (-currentIndex * 100 / (images.length + 2)) + '%)';
  }

  // Update pagination buttons
  function updatePagination() {
    const adjustedIndex = currentIndex - 1; // Adjust the index back to the original range
    for (let i = 0; i < paginationButtons.length; i++) {
      paginationButtons[i].classList.remove('active');
    }

    paginationButtons[adjustedIndex].classList.add('active');
  }

  // Start the slide interval
  function startSlideInterval() {
    slideInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % (images.length + 2); // Add 2 extra images for infinite sliding
      goToSlide(nextIndex);
    }, intervalTime);
  }

  // Restart the slide interval
  function restartSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
  }

  // Adjust the carousel when the window is resized
  window.addEventListener('resize', adjustCarousel);

  // Initialize the carousel
  adjustCarousel();
});
