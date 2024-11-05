const slides = document.querySelectorAll('.slide')
const pauseButton = document.querySelector('#pause')
const prevButton = document.querySelector('#previous')
const nextButton = document.querySelector('#next')

let currentSlide = 0
let isPlaying = true
let interval = null

function gotoSlide(n){
  slides[currentSlide].classList.toggle('active') 
  currentSlide = (n + slides.length) % slides.length
  slides[currentSlide].classList.toggle('active') 
}

function nextSlide() {
 gotoSlide(currentSlide + 1)
}

function prevSlide() {
  gotoSlide(currentSlide - 1)
}

function pauseSlideShow() {
  pauseButton.textContent = 'Play'
  clearInterval(interval)
  isPlaying = false
}

function playSlideShow() {
  pauseButton.textContent = 'Pause'
  interval = setInterval( nextSlide, 2000)
  isPlaying = true
}

function pausePlaySlideShow(){
  if (isPlaying) {
    pauseSlideShow()
  } else {
    playSlideShow()
  }
}

function nextClick() {
  pauseSlideShow()
  nextSlide()
}

function prevClick() {
  pauseSlideShow()
  prevSlide()
}

pauseButton.addEventListener('click', pausePlaySlideShow)
nextButton.addEventListener('click', nextClick)
prevButton.addEventListener('click', prevClick)

interval = setInterval(nextSlide, 2000)