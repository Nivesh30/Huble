// JavaScript code for sliding the timeline
const timelineContainer = document.querySelector('.timeline-container');
const timelineSlide = document.querySelector('.timeline-slide');
const prevButton = timelineContainer.querySelector('.prev-btn');
const nextButton = timelineContainer.querySelector('.next-btn');
const timelineDatesContainer = document.querySelector('.timeline-dates-container');
const timelineDateItems = document.querySelectorAll('.timeline-date-item');
const slideInfoItems = document.querySelectorAll('.slide-info-item');

let currentIndex = 0;
const slideWidthDesktop = 33.33; // Slide width in percentage for desktop (3 slides)
const slideWidthMobile = 50; // Slide width in percentage for mobile (2 slides)

// Calculate the maximum index based on the number of slides and the viewport width
const maxIndex = window.innerWidth > 768 ? Math.ceil(timelineSlide.childElementCount / 3) - 1 : Math.ceil(timelineSlide.childElementCount / 2) - 1;

// Set initial slide position based on the current index
const setSlidePosition = () => {
    const slideWidth = window.innerWidth > 768 ? slideWidthDesktop : slideWidthMobile;
    timelineSlide.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
};

// Update active timeline date and slide info
const updateActiveItem = () => {
    timelineDateItems.forEach((dateItem, index) => {
        dateItem.classList.toggle('active', index === currentIndex);
    });

    slideInfoItems.forEach((infoItem, index) => {
        infoItem.classList.toggle('active', index === currentIndex);
    });

    // Calculate the visible range of dates
    const visibleDatesCount = window.innerWidth > 768 ? 6 : 4;
    const startIndex = currentIndex;
    const endIndex = currentIndex + visibleDatesCount - 1;

    // Update the active state of date items based on the visible range
    timelineDateItems.forEach((dateItem, index) => {
        dateItem.style.display = index >= startIndex && index <= endIndex ? 'block' : 'none';
    });
};

// Handle previous button click
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        setSlidePosition();
        updateActiveItem();
    }
});

// Handle next button click
nextButton.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
        setSlidePosition();
        updateActiveItem();
    }
});

// Handle timeline date item click
timelineDatesContainer.addEventListener('click', (event) => {
    const target = event.target;
    const clickedIndex = Array.from(timelineDateItems).indexOf(target);
    if (clickedIndex !== -1 && clickedIndex !== currentIndex) {
        currentIndex = clickedIndex;
        setSlidePosition();
        updateActiveItem();
    }
});

// Automatic sliding every 3 seconds
setInterval(() => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    setSlidePosition();
    updateActiveItem();
}, 3000);

// Initial setup
setSlidePosition();
updateActiveItem();