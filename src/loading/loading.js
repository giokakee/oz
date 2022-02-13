window.$ = window.jQuery = require("jquery");
import "fullPage.js/dist/jquery.fullpage.js";
import { Input } from "postcss";
import { config } from "../content/config.js";
import { checkGsapActive, sectAnim, scroll } from "../gsap/index.js";

// helper objecr for define animations
let leaveSection = [
  {
    index: 1,
    direction: "down",
    secIndex: 3,
    secDirection: "up",
    animation: "aboutUsAnim",
    method: "restart",
  },
  {
    index: 2,
    direction: "down",
    secIndex: 2,
    secDirection: "up",
    animation: "aboutUsAnim",
    method: "reverse",
  },
  {
    index: 2,
    direction: "down",
    secIndex: 4,
    secDirection: "up",
    animation: "servicesAnim",
    method: "restart",
  },
  {
    index: 3,
    direction: "down",
    secIndex: 3,
    secDirection: "up",
    animation: "servicesAnim",
    method: "reverse",
  },
  {
    index: 3,
    direction: "down",
    secIndex: 5,
    secDirection: "up",
    animation: "projectAnim",
    method: "restart",
  },
  {
    index: 4,
    direction: "down",
    secIndex: 4,
    secDirection: "up",
    animation: "projectAnim",
    method: "reverse",
  },
  {
    index: 4,
    direction: "down",
    secIndex: 6,
    secDirection: "up",
    animation: "blogsAnim",
    method: "restart",
  },
  {
    index: 5,
    direction: "down",
    secIndex: 5,
    secDirection: "up",
    animation: "blogsAnim",
    method: "reverse",
  },
  {
    index: 5,
    direction: "down",
    secIndex: 7,
    secDirection: "up",
    animation: "careersAnim",
    method: "restart",
  },
  {
    index: 6,
    direction: "down",
    secIndex: 6,
    secDirection: "up",
    animation: "careersAnim",
    method: "reverse",
  },
  {
    index: 6,
    direction: "down",
    secIndex: 8,
    secDirection: "up",
    animation: "customersAnim",
    method: "restart",
  }, {
    index: 7,
    direction: "down",
    secIndex: 7,
    secDirection: "up",
    animation: "customersAnim",
    method: "reverse",
  },  {
    index: 7,
    direction: "down",
    secIndex: 9,
    secDirection: "up",
    animation: "contactAnim",
    method: "restart",
  }, {
    index: 8,
    direction: "down",
    secIndex: 8,
    secDirection: "up",
    animation: "contactAnim",
    method: "reverse",
  },
];

const animated = document.querySelector(".loading__logo-right");

animated.addEventListener("animationend", () => {
  $.fn.fullpage.setAllowScrolling(true);
  document.querySelector(".loading").style.display = "none";
  sectAnim.home.resume();
});

// init Swiper for project section (PC version)
new Swiper(".swiper__lg", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// init Swiper for project section (Mobile version)
new Swiper(".swiper-mobile__container", {
  // Optional parameters
  loop: true,

  direction: "vertical",
  pagination: {
    clickable: true,
    el: ".mobile__pagination",
    dynamicBullets: true,
  },
});

// init full page js, and resume animations
$("#fullPage").fullpage({
  scrollingSpeed: config.scrollSpeed,
  normalScrollElements: ".aboutUs-body-text, .services-body__right, .swiper-mobile__container, .section__navigation",

  afterLoad: function (anchorLink, index) {
    let loadedSection = $(this);
    // index are page numbers, 1 = home, 3 = services and etc...
    if (checkGsapActive)
      switch (index) {
        case 1:
          break;
        case 2:
          sectAnim.aboutUs.resume();
          break;
        case 3:
          sectAnim.services.resume();
          break;
        case 4:
          sectAnim.project.resume();
          break;
        case 5:
          sectAnim.blogs.resume();
          break;
        case 6:
          sectAnim.careers.resume();
          break;          
        case 7:
          scroll.customersAnim.resume();
          break;
        case 8:
          sectAnim.contact.resume();
          break;
      }
  },

  onLeave: function (index, nextIndex, direction) {
    let leavingSection = $(this);
    if (checkGsapActive) {

      leaveSection.map(anim => {
        if (index === anim.index && direction === anim.direction || index === anim.secIndex && direction === anim.secDirection) {
          scroll[anim.animation][anim.method]();
        }
      });
    }
  }
});

$.fn.fullpage.setAllowScrolling(false);

document.querySelector(".customers__names");
let servicesDiv = document.querySelector(".services-body__right");
let aboutUsDiv = document.querySelector(".aboutUs-body-text");
let blogsArea = document.querySelector(".blogsArea");
let careersArea = document.querySelector(".careersArea");

function scrollThing(container) {
  container.addEventListener("wheel", () => {
    let aboutUsScroll = container.scrollHeight - 25 > container.clientHeight;
    if (aboutUsScroll) {
      $.fn.fullpage.setAllowScrolling(false);
    } else {
      $.fn.fullpage.setAllowScrolling(true);
    }
  }, false);

  container.addEventListener("mouseleave", () => {
    $.fn.fullpage.setAllowScrolling(true);
  });
}
scrollThing(aboutUsDiv);
scrollThing(servicesDiv);
scrollThing(blogsArea);
scrollThing(careersArea);

/* --------
 clear website url before refresh
---------- */

window.location.replace("#");

if (typeof window.history.replaceState === "function") {
  history.replaceState({}, "", window.location.href.slice(0, -1));
}

jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};




/* --------
 for "read more" inside blogs
---------- */
let blogs = document.querySelectorAll('.blogDiv');
let buttons = document.querySelectorAll('.blogBtn');

buttons.forEach(button =>  {
  button.addEventListener("click", ({target}) => {
    let btnValue = target.value
    
    button.parentElement.parentElement.classList.toggle("readMore");

      blogs.forEach((blog) => {
        let blogValue = blog.attributes.value.value;
          if(blogValue !== btnValue){
            blog.classList.toggle("nonDisplay")
          }
      })

    if(button.innerText === "Read more"){
      button.innerText = "Read less"
    }else{
      button.innerText = "Read more"
    }
  })
})




/* --------
Careers
---------- */

let careerDiv = document.querySelectorAll('.careerDiv')

careerDiv.forEach(element => {
  let careerBtn = element.querySelector('.careerBtn');
  let listDiv = element.querySelector('.listDiv');
  let resumeDiv = element.querySelector('.resumeDiv');
  let backBtn = element.querySelector('.backButton');
  let sendBtn = element.querySelector('.sendResumeBtn');
  
  careerBtn.addEventListener('click', () => {
    listDiv.classList.toggle("nonDisplay")
    resumeDiv.classList.remove("nonDisplay")
  })
  
  backBtn.addEventListener('click', () => {
    listDiv.classList.remove("nonDisplay")
    resumeDiv.classList.toggle("nonDisplay")
  })
  
  
  
  //Sending resume
  sendBtn.addEventListener('click', () => {
    let file = element.querySelector('.file').files;
    let title = element.querySelector('.title').innerHTML;
    let mail = element.querySelector('.mailInput').value;

    
    if(mail && file){
      listDiv.classList.remove("nonDisplay")
      resumeDiv.classList.toggle("nonDisplay")
      let userInfo = {
        file, title, mail
      }
      console.log(userInfo)
    }else{
      console.log('here should be error message')

    }
  })

})


