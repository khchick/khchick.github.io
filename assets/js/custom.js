// USER TRIGGER EFFECTS

$(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('animate-icon');
      $('#overlay').fadeToggle();
    });

    $('#overlay').click(function(){
      $('#nav-icon').removeClass('animate-icon');
      $('#overlay').toggle();
    });

    $('.animated-icon1').click(function(){
      $(this).toggleClass('open');
    });

    $('.overlay-desc').hide().fadeIn(3000);
    $('.overlay-desc span').hide().delay(1000).fadeIn(2000);

    $('.client-container').mouseover(function() {
        $(this).addClass('flipInY');
    })
    
});

// ANIMATE ON SCROLL
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
        });
    });
});










  

