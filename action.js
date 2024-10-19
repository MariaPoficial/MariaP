const changeSlideButtons = document.querySelectorAll("[data-change-slide-button]")

changeSlideButtons.forEach(button => {
  button.addEventListener("click", () => {
    const slides = document.querySelector(".slides")
    const activeSlide = slides.querySelector("[data-active]")
    let indexActiveSlide = Array.from(slides.children).indexOf(activeSlide)

    indexActiveSlide = button.dataset.changeSlideButton === "next" 
    ?  indexActiveSlide + 1 
    :  indexActiveSlide - 1

    if (indexActiveSlide >= slides.children.length) {
      indexActiveSlide = 0
    }

    if (indexActiveSlide < 0) {
      indexActiveSlide = slides.children.length - 1
    }

    activeSlide.removeAttribute("data-active")
    slides.children[indexActiveSlide].dataset.active = true
  })
})


const changeSlideButtons2 = document.querySelectorAll("[data-change-slide-button2]")

changeSlideButtons2.forEach(button => {
  button.addEventListener("click", () => {
    const slides2 = document.querySelector(".slides2")
    const activeSlide2 = slides2.querySelector("[data-active]")
    let indexActiveSlide2 = Array.from(slides2.children).indexOf(activeSlide2)

    indexActiveSlide2 = button.dataset.changeSlideButton2 === "next" 
    ?  indexActiveSlide2 + 1 
    :  indexActiveSlide2 - 1

    if (indexActiveSlide2 >= slides2.children.length) {
      indexActiveSlide2 = 0
    }

    if (indexActiveSlide2 < 0) {
      indexActiveSlide2 = slides2.children.length - 1
    }

    activeSlide2.removeAttribute("data-active")
    slides2.children[indexActiveSlide2].dataset.active = true
  })
})


const changeSlideButtons3 = document.querySelectorAll("[data-change-slide-button3]")

changeSlideButtons3.forEach(button => {
  button.addEventListener("click", () => {
    const slides3 = document.querySelector(".slides3")
    const activeSlide3 = slides3.querySelector("[data-active]")
    let indexActiveSlide3 = Array.from(slides3.children).indexOf(activeSlide3)

    indexActiveSlide3 = button.dataset.changeSlideButton3 === "next" 
    ?  indexActiveSlide3 + 1 
    :  indexActiveSlide3 - 1

    if (indexActiveSlide3 >= slides3.children.length) {
      indexActiveSlide3 = 0
    }

    if (indexActiveSlide3 < 0) {
      indexActiveSlide3 = slides3.children.length - 1
    }

    activeSlide3.removeAttribute("data-active")
    slides3.children[indexActiveSlide3].dataset.active = true
  })
})


const changeSlideButtons4 = document.querySelectorAll("[data-change-slide-button4]")

changeSlideButtons4.forEach(button => {
  button.addEventListener("click", () => {
    const slides4 = document.querySelector(".slides4")
    const activeSlide4 = slides4.querySelector("[data-active]")
    let indexActiveSlide4 = Array.from(slides4.children).indexOf(activeSlide4)

    indexActiveSlide4 = button.dataset.changeSlideButton4 === "next" 
    ?  indexActiveSlide4 + 1 
    :  indexActiveSlide4 - 1

    if (indexActiveSlide4 >= slides4.children.length) {
      indexActiveSlide4 = 0
    }

    if (indexActiveSlide4 < 0) {
      indexActiveSlide4 = slides4.children.length - 1
    }

    activeSlide4.removeAttribute("data-active")
    slides4.children[indexActiveSlide4].dataset.active = true
  })
})


const changeSlideButtons5 = document.querySelectorAll("[data-change-slide-button5]")

changeSlideButtons5.forEach(button => {
  button.addEventListener("click", () => {
    const slides5 = document.querySelector(".slides5")
    const activeSlide5 = slides5.querySelector("[data-active]")
    let indexActiveSlide5 = Array.from(slides5.children).indexOf(activeSlide5)

    indexActiveSlide5 = button.dataset.changeSlideButton5 === "next" 
    ?  indexActiveSlide5 + 1 
    :  indexActiveSlide5 - 1

    if (indexActiveSlide5 >= slides5.children.length) {
      indexActiveSlide5 = 0
    }

    if (indexActiveSlide5 < 0) {
      indexActiveSlide5 = slides5.children.length - 1
    }

    activeSlide5.removeAttribute("data-active")
    slides5.children[indexActiveSlide5].dataset.active = true
  })
})

const changeSlideButtons6 = document.querySelectorAll("[data-change-slide-button6]")

changeSlideButtons6.forEach(button => {
  button.addEventListener("click", () => {
    const slides6 = document.querySelector(".slides6")
    const activeSlide6 = slides6.querySelector("[data-active]")
    let indexActiveSlide6 = Array.from(slides6.children).indexOf(activeSlide6)

    indexActiveSlide6 = button.dataset.changeSlideButton6 === "next" 
    ?  indexActiveSlide6 + 1 
    :  indexActiveSlide6 - 1

    if (indexActiveSlide6 >= slides6.children.length) {
      indexActiveSlide6 = 0
    }

    if (indexActiveSlide6 < 0) {
      indexActiveSlide6 = slides6.children.length - 1
    }

    activeSlide6.removeAttribute("data-active")
    slides6.children[indexActiveSlide6].dataset.active = true
  })
})



function changeImage() {
  let displayImage = document.getElementById('baloon')
  if(displayImage.src.match('baloon.png')){
    displayImage.src ='baloon2.png'
  } else {
    displayImage.src= 'baloon.png'
  }
  }


