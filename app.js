const scroll = document.querySelector('.landing__scroll');

const landingProjekti = document.querySelector('.landing__projekti');
const landingKontakt = document.querySelector('.landing__kontakt');
const kontakt = document.querySelector('.kontakt');

landingKontakt.addEventListener('click', (e) => {
  smoothScroll(kontakt);
  console.log('kontakt.getBoundingClientReact().top');
});

document.body.addEventListener('wheel', (e) => {
  if (window.pageYOffset > 400) {
    scroll.style.display = 'none';
  } else {
  }
});

function smoothScroll(target) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientReact().top;

  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  window.scrollTo(0, targetPosition);
}
