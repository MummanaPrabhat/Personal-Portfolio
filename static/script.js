// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

Shery.mouseFollower();

Shery.makeMagnet(".magnet");

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
      rotate: gsap.utils.clamp(-20, 20, diff_rot * 0.25),
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

gsap.to([".l_texts", ".images"], {
  scrollTrigger: {
    trigger: "#skills",
    pin: true,
    start: "top top",
    // end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

// Menu bar

const menuText = document.querySelector(".menu");
const menuPop = document.getElementById("menu_texts");
let v = 0;

function showMenu() {
  menuPop.style.opacity = 1;
  gsap.from(menuPop, {
    opacity: 0,
    duration: 0.5,
    ease: Power3,
  });
}

function hideMenu() {
  gsap.to(menuPop, {
    opacity: 0,
    duration: 0.5,
    ease: Power3,
    onComplete: () => {
      menuPop.style.opacity = 0; // Set opacity to 0 once animation completes
    },
  });
}

menuPop.addEventListener("click", () => {
  v = 1;
});

menuText.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  if (menuPop.style.opacity === "0") {
    showMenu();
  } else {
    hideMenu();
  }
});

window.addEventListener("scroll", () => {
  if (v == 1) {
    v = 0;
  } else {
    hideMenu();
  }
});
