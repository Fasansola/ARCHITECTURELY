let services = document.getElementById('services');
let prev = document.getElementById("service-prev");
let next = document.getElementById("service-next");
let serviceSlide = services.querySelector('.slide');


services.addEventListener('mouseenter', moveBack)
services.addEventListener('mouseleave', infiniteScroll)
prev.addEventListener('click', moveBack);
next.addEventListener('click', moveNext);


// FUNCTIONS

function infiniteScroll() {
    serviceSlide.style.transform = "translateX(-51%)"
    serviceSlide.style.transition = "transform 10s ease"
}


function moveNext() {
    serviceSlide.style.transform = "translateX(-51%)"
    serviceSlide.style.transition = "transform 2.5s ease"
    next.style.stroke = "#A5A5A5";
    prev.style.stroke = "#ffffff";
    prev.addEventListener('click', moveBack);
    next.removeEventListener('click', moveNext);
}


function moveBack() {
    serviceSlide.style.transform = "translateX(0)"
    serviceSlide.style.transition = "transform 2.5s ease"
    prev.style.stroke = "#A5A5A5";
    next.style.stroke = "#ffffff";
    prev.removeEventListener('click', moveBack);
    next.addEventListener('click', moveNext);
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