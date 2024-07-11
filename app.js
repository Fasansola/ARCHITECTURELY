let services = document.getElementById('services');
let items = document.querySelectorAll('.services-items');
let prev = document.getElementById("service-prev");
let next = document.getElementById("service-next");
let serviceSlide = services.querySelector('.slide');



let itemsHidden = items.length - (window.innerWidth / items[0].offsetWidth)
let counter = itemsHidden
let slideIndex = 0


next.addEventListener('click', moveNext);
prev.removeEventListener('click', moveBack);


// FUNCTIONS

function infiniteScroll() {
    serviceSlide.style.transform = "translateX(-51%)"
    serviceSlide.style.transition = "transform 10s ease"
}


function moveNext() {
    if (counter > 1) {
        counter--
        slideIndex = itemsHidden - counter
    } else {
        slideIndex += counter
        counter--
    }

    console.log("Counter: ", counter)
    console.log("Index: ", slideIndex)

    serviceSlide.style.transform = `translateX(-${slideIndex * items[0].offsetWidth}px)`

    checkMotion()
}


function moveBack() { 
    counter++

    if (slideIndex >= 1) {
        slideIndex--
    } else {
        slideIndex -= slideIndex
    }

    serviceSlide.style.transform = `translateX(-${slideIndex * items[0].offsetWidth}px)`

    checkMotion()
}


let checkMotion = () => {
    if (counter <= 0) {
        next.removeEventListener('click', moveNext);
        next.style.stroke = "#A5A5A5";
    }
    else {
        next.addEventListener('click', moveNext);
        next.style.stroke = "#FFFFFF";
    }

    if (counter >= 3) {
        prev.removeEventListener('click', moveBack);
        prev.style.stroke = "#A5A5A5";
    }
    else {
        prev.addEventListener('click', moveBack);
        prev.style.stroke = "#ffffff";
    }
}



// TESTIMONIALS

let testimonialSlide = document.querySelector(".testimonial-slide")
let testPrev = document.getElementById('previous-testimonial')
let testNext = document.getElementById('next-testimonial')
let index = 0
let testCount = testimonialSlide.childElementCount
let forward = true


let moveTestNext = () => {
    index++
    testimonialSlide.style.transform = `translateX(${index % testCount * -100}%)`
}

let moveTestBack = () => {
    if (index > 0)
        index--
    testimonialSlide.style.transform = `translateX(${index % testCount * -100}%)`
}

let testInfininteScroll = () => {
    if (index === 0)
        forward = true

    if (index === 2)
        forward = false

    if (!forward)
        moveTestBack()

    if (forward)
        moveTestNext()
}


setInterval(testInfininteScroll, 20000)

testNext.onclick = moveTestNext;
testPrev.onclick = moveTestBack;



// PLAY ANIMATIONS ON VIEW

const animateSections = document.querySelectorAll('section');

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  animateSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("run-effects")
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('resize', checkScroll);
window.addEventListener('load', checkScroll);


// ENSURE THE SERVICES SLIDER WORKS ON TABLETS & MOBILE 

/*

We can find each slider width and have a counter that checks to see the hidden elements based on that.
The count would serve as an index and help us loop over the element, or each click of next we transform by - a width, we do the reverse of prev btn On each click



*/