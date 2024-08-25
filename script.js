const carouselContainer = document.querySelector('.carousel-container')
const carousel = document.querySelector('.carousel')
const prevButton = document.querySelector('.nav-button.prev')
const nextButton = document.querySelector('.nav-button.next')

let currentIndex = 0
let stopAutoSlide = false

const updateCarousel = () => {
    const cardWith = document.querySelector('.carousel-card').clientWidth
    carousel.style.transform = `translateX(-${currentIndex * (cardWith + 20)}px )`
    
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-card').length
    updateCarousel()
})

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex -1 + document.querySelectorAll('.carousel-card'). length) % document.querySelectorAll('.carousel-card').length  
        updateCarousel()
})

setInterval(() => {
    if(stopAutoSlide) return false
    currentIndex = (currentIndex + 1) %document.querySelectorAll('.carousel-card').length
    updateCarousel()
},3000)

carouselContainer.addEventListener('mouseover', () => {
    stopAutoSlide = true
})

carouselContainer.addEventListener('mouseout', () => {
    stopAutoSlide = false
})

window.addEventListener('resize', updateCarousel)

