

$(document).ready(function(){
  $('#nav-menu').click(function(){
      $('.nav-menu').addClass('nav-open').slideToggle('300');
  });
});

(function () {
  var toggle = document.querySelector('.nav-burger');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});