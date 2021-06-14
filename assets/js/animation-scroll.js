const element = document.querySelectorAll('[data-animate]')

const intersectionObserverScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in')
    }
  })
}, {
  rootMargin: '0px',
  threshold: 0
})

element.forEach(animateElement => intersectionObserverScroll.observe(animateElement))

