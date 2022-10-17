function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('slide_active')

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
}

slidesPlugin(3)
