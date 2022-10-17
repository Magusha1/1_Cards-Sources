const slides = document.querySelectorAll('.slide')

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove('slide_active')
  })
}

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActiveClasses()

    slide.classList.add('slide_active')
  })
})
