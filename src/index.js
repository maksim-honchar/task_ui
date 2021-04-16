// Nav
const ul = document.getElementById('topnav')
const liElements = ul.getElementsByClassName('li')

for (var i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}


//Slider
let slideIndex = 1

const arrowPrev = document.getElementById('prev')
const arrowNext = document.getElementById('next')

const dot1 = document.getElementById('pic-1')
const dot2 = document.getElementById('pic-2')
const dot3 = document.getElementById('pic-3')
const dot4 = document.getElementById('pic-4')
const dot5 = document.getElementById('pic-5')

arrowPrev.addEventListener('click', () => showSlides(slideIndex += -1))
arrowNext.addEventListener('click', () => showSlides(slideIndex += 1))

dot1.addEventListener('click', () => showSlides(slideIndex = 1))
dot2.addEventListener('click', () => showSlides(slideIndex = 2))
dot3.addEventListener('click', () => showSlides(slideIndex = 3))
dot4.addEventListener('click', () => showSlides(slideIndex = 4))
dot5.addEventListener('click', () => showSlides(slideIndex = 5))

const showSlides = n => {
  let i
  const slides = document.getElementsByClassName('mySlides')
  const dots = document.getElementsByClassName('dot')

  if (n > slides.length) {
    {slideIndex = 1}
  }     

  if (n < 1) {
    {slideIndex = slides.length}
  } 

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
  }

  slides[slideIndex-1].style.display = 'block'
  dots[slideIndex-1].className += ' active'
}

showSlides(slideIndex)