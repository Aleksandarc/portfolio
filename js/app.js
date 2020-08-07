var returnToTop = document.querySelector('.returnToTheTop');
returnToTop.addEventListener('click', function (ev) {
  document.documentElement.scrollTo(0, 0);
});

// SCROLL NAVBAR
var lastScrollTop = 0;
navbar = document.querySelector('.topNavbar');
window.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});