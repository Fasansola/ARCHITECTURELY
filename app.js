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


setInterval(testInfininteScroll, 10000)

testNext.onclick = moveTestNext;
testPrev.onclick = moveTestBack;

































































// const servicesCount = document.querySelectorAll(".services-items").length;
// let slideIndex = 0;
// const slide = document.querySelector(".slide");

// function moveForward() {
//   // slideIndex++;
//   const services = document.querySelectorAll(".services-items");

//   services.forEach((service) => {
//     service.style.animationPlayState = 'running'
//     service.style.animationInterationCount = '1'

//     // service.addEventListener

//     service.addEventListener("transitionend", () => {
//       //slide.append();
//     });
//   });

//   slide.append(services[0]);

//   //slide.style.transform = `translateX(-${slideIndex * 30}%)`;
//   //
//   //slide.addEventListener("transitionend", () => {
//   //  slide.append(services[0]);
//   //  slide.style.left = `${slideIndex * 30}%`;
//   //});
// }

// function moveBackward() {
//   slideIndex++;
//   slide.style.left = "30%";
//   slide.style.transform = `translateX(-${slideIndex * 30}%)`;

//   const services = document.querySelectorAll(".services-items");
//   slide.prepend(services[services.length - 1]);

//   slide.style.transform = `translateX(${slideIndex * 30}%)`;

//   //console.log(`translateX(-${slideIndex * 30}%)`);
//   console.log(slide.style.transform);

//   //slide.addEventListener("transitionend", () => {
//   //  slide.style.left = `${slideIndex * 30}%`;
//   //});
// }

// next.onclick = moveForward;
// prev.onclick = moveBackward;



//       //let serviceInterval = setInterval(moveForward, 2500);






















//       let prev = document.getElementById("service-prev");
//       let next = document.getElementById("service-next");
//       const servicesCount = document.querySelectorAll(".services-items").length;

//       let slideIndex = 0;
//       const slide = document.querySelector(".slide");

//       function moveForward() {
//         const services = document.querySelectorAll(".services-items");
//         // index = slideIndex % servicesCount;

//         slide.style.transform = `translateX(-${30}%)`;
//         document.querySelector(".slide").append(services[index]);

//         slide.addEventListener("transitionend", () => {
//           slide.style.transform = `translateX(-${30}%)`;
//         });

//         slideIndex++;

//         if (slideIndex === servicesCount) {
//           for (let i = 0; i < servicesCount; i++) {
//             services[0].remove();
//             slide.style.transform = `translateX(0)`;
//           }
//         }
//       }

//       next.onclick = moveForward;

//       //let serviceInterval = setInterval(moveForward, 1000);

      //
      //function moveServiceNext() {
      //  slideIndex++;
      //  updateSlider();
      //}
      //
      //function moveServicePrev() {
      //  slideIndex--;
      //  updateSlider();
      //}
      //
      //function updateSlider() {
      //  if (slideIndex > items.length - 3) slideIndex = 0;
      //  if (slideIndex < 0) slideIndex = items.length - 3;
      //  slide.style.transform = `translateX(-${slideIndex * 31}%)`;
      //}
      //
      //next.onclick = moveServiceNext;
      //prev.onclick = moveServicePrev;
      //
      //// Auto-slide
      //setInterval(moveServiceNext, 5000);

      //// let serviceSlide = document.querySelector(".slide");
      //
      //function moveServiceNext() {
      //  let services = document.querySelectorAll(".services-items");
      //
      //  services.forEach((element) => {
      //    element.style.animationPlayState = "running";
      //
      //    // Prevent glitches just incase the prev button is pressed multiple times
      //    if ((element.style.animationPlayState = "running")) {
      //      prev.onclick = null;
      //      next.onclick = null;
      //    }
      //
      //    let iteration = 0;
      //    element.addEventListener("animationiteration", () => {
      //      iteration++;
      //      if (iteration === 1) {
      //        element.style.animationPlayState = "paused";
      //        document.querySelector(".slide").append(services[0]);
      //        prev.onclick = moveServicePrev;
      //        next.onclick = moveServiceNext;
      //      }
      //    });
      //  });
      //}
      //
      //function moveServicePrev() {
      //  let services = document.querySelectorAll(".services-items");
      //  document.querySelector(".slide").prepend(services[services.length - 1]);
      //
      //  services.forEach((element) => {
      //    element.style.animationPlayState = "running";
      //    element.style.animationDirection = "reverse";
      //
      //    // Prevent glitches just incase the prev button is pressed multiple times
      //    if ((element.style.animationPlayState = "running")) {
      //      prev.onclick = null;
      //      next.onclick = null;
      //    }
      //
      //    let iteration = 0;
      //    element.addEventListener("animationiteration", () => {
      //      iteration++;
      //      if (iteration === 1) {
      //        element.style.animationPlayState = "paused";
      //        element.style.animationDirection = "normal";
      //        prev.onclick = moveServicePrev;
      //        next.onclick = moveServiceNext;
      //      }
      //    });
      //  });
      //}
      //
      //// On click of next and prev button
      //next.onclick = moveServiceNext;
      //prev.onclick = moveServicePrev;
      //