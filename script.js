// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

// This Locomotive js smooth scroll is making the scrollTrigger very less effective
// Mouse Move Elastic and Basic Mouse Move Functions

// function circleMouseFollower() {
//   window.addEventListener("mousemove", function (dets) {
//     document.querySelector(
//       "#animated_circle"
//     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//   });
// }

// circleMouseFollower();

// /**
//  * YouTube Tutorial:
//  * https://youtu.be/wG_5453Vq98
//  */

// console.clear();

// // Select the circle element
// const circleElement = document.querySelector("#animated_circle");

// // Create objects to track mouse position and custom cursor position
// const mouse = { x: 0, y: 0 }; // Track current mouse position
// const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
// const circle = { x: 0, y: 0 }; // Track the circle position

// // Initialize variables to track scaling and rotation
// let currentScale = 0; // Track current scale value
// let currentAngle = 0; // Track current angle value

// // Update mouse position on the 'mousemove' event
// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
// });

// // Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
// const speed = 0.17;

// // Start animation
// const tick = () => {
//   // MOVE
//   // Calculate circle movement based on mouse position and smoothing
//   circle.x += (mouse.x - circle.x) * speed;
//   circle.y += (mouse.y - circle.y) * speed;
//   // Create a transformation string for cursor translation
//   const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

//   // SQUEEZE
//   // 1. Calculate the change in mouse position (deltaMouse)
//   const deltaMouseX = mouse.x - previousMouse.x;
//   const deltaMouseY = mouse.y - previousMouse.y;
//   // Update previous mouse position for the next frame
//   previousMouse.x = mouse.x;
//   previousMouse.y = mouse.y;
//   // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
//   const mouseVelocity = Math.min(
//     Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
//     150
//   );
//   // 3. Convert mouse velocity to a value in the range [0, 0.5]
//   const scaleValue = (mouseVelocity / 150) * 0.5;
//   // 4. Smoothly update the current scale
//   currentScale += (scaleValue - currentScale) * speed;
//   // 5. Create a transformation string for scaling
//   const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

//   // ROTATE
//   // 1. Calculate the angle using the atan2 function
//   const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
//   // 2. Check for a threshold to reduce shakiness at low mouse velocity
//   if (mouseVelocity > 20) {
//     currentAngle = angle;
//   }
//   // 3. Create a transformation string for rotation
//   const rotateTransform = `rotate(${currentAngle}deg)`;

//   // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
//   circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

//   // Request the next frame to continue the animation
//   window.requestAnimationFrame(tick);
// };

// // Start the animation loop
// tick();

// Shery JS usage of Mouse Move and Mouse Magnet effects Pretty Handy It seems lol

Shery.mouseFollower();

Shery.makeMagnet(".magnet");

Shery.hoverWithMediaCircle(".vid", {
  videos: ["./Naruto Homework.mp4"],
});

function main_page_animation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    duration: 1.5,
    opacity: 0,
    ease: Expo.easeInOut,
  })
    .to(".hide_ele", {
      y: 0,
      delay: -1,
      duration: 2,
      stagger: 0.2,
      ease: Expo.easeInOut,
    })
    .from("#heading_footer", {
      y: "-10",
      duration: 1.5,
      opacity: 0,
      delay: -0.5,
      ease: Expo.easeInOut,
    });
}

main_page_animation();

document.querySelectorAll(".element").forEach(function (element) {
  var rotate = 0;
  var diff_rot = 0;

  element.addEventListener("mouseleave", function (dets) {
    var diff = dets.clientY - element.getBoundingClientRect().top;
    // console.log(diff);
    diff_rot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      //   duration: 0.2,
    });
  });

  element.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - element.getBoundingClientRect().top - 200;
    console.log(element.getBoundingClientRect());
    diff_rot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diff_rot * 0.5),
    });
  });
});

// Time Function
function updating_time() {
  var now = new Date();
  var timestring = now.getHours() + ":" + now.getMinutes();
  var am_pm = now.getHours() > 12 ? "PM" : "AM";
  var time_div = document.getElementById("footer-left");
  var time_ele = time_div.querySelector("h5:nth-of-type(2)");
  var year_ele = now.getFullYear();
  var year_element = time_div.querySelector("h5:nth-of-type(1)");
  year_element.textContent = year_ele + " " + "©";
  time_ele.textContent = timestring + " " + am_pm + " EST ";
}
//Functoin calling
updating_time();
// TO Update time every Seocond
setInterval(updating_time, 1000);

//Certificates loading Screen

gsap.to(".l_texts", {
  scrollTrigger: {
    trigger: "#skills",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".l_texts");

Shery.imageEffect(".images", {
  style: 5,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, idx) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (dets) {
          setScroll(dets.progress + idx);
        },
      });
    });
  },
});
