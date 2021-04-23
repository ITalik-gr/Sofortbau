
function anim(duration) {
  var temp;
  return function(sel) {
      cancelAnimationFrame(temp);
      var start = performance.now();
      var from = window.pageYOffset || document.documentElement.scrollTop,
      to = document.querySelector(sel).getBoundingClientRect().top;
      requestAnimationFrame(function step(timestamp) {
          var progress = (timestamp - start) / duration;
          1 <= progress && (progress = 1);
          window.scrollTo(0, from + to * progress | 0);
          1 > progress && (temp = requestAnimationFrame(step))
      })
  }
};
var scrollMenu = anim(2000)

//* burger

var trigger = document.getElementById('nav-menu');

trigger.addEventListener('click', function() {
  trigger.classList.toggle('opened');
});

//* menu

var toggle = document.getElementById('nav-menu');
var block = document.getElementById('nav-list');

toggle.addEventListener('click', function() {
  block.classList.toggle('nav-menu-active');
})

