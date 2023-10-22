// ------Slick Slider---------

$('.main_slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: 'linear',
});

// ------Slick Slider---------

// -----Scroll to top button------

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -----Scroll to top button------

// -----Banner Left Video------

// a reference to the video 
var video = document.getElementById('slowVideo');

// Set the playback rate speed
video.playbackRate = 0.8;

// When the video ends, loop it
video.addEventListener('ended', function() {
  // Restart video
  video.currentTime = 0; 
  video.play();
});

// Play the video
video.play();

// -----Banner Left Video------
