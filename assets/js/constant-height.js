window.addEventListener('resize', appheight())

function appheight() {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}
