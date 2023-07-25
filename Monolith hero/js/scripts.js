document.getElementById("open-modal").addEventListener("click", function() {
  document.getElementById("modal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});

// Prevent form submission for this example
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Close the modal after form submission (you can modify this behavior as needed)
  document.getElementById("modal").style.display = "none";
});





document.getElementById("open-modal-two").addEventListener("click", function() {
  document.getElementById("modal-two").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("modal-two").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === document.getElementById("modal-two")) {
    document.getElementById("modal-two").style.display = "none";
  }
});

// Prevent form submission for this example
document.getElementById("contact-form-two").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Close the modal after form submission (you can modify this behavior as needed)
  document.getElementById("modal-two").style.display = "none";
});





var width = window. innerWidth;

        if(width < 765){
  // true for mobile device
  $('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,
  swipeToSlide:true,
  dots:true,
});
}
else if (width > 765 && width < 1140) {
  // false for not mobile device
  $('.autoplay').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2500,
  arrows:false,
  swipeToSlide:true,
});
}

else{
  // false for not mobile device
  $('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2500,
  arrows:false,
  swipeToSlide:true,
});
}