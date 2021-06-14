const header = document.querySelector('[data-header-scroll]')

window.addEventListener('scroll', function(e) {
  header.classList.toggle('header-is-scrolling', window.scrollY > 130)
});
