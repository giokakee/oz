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
    animation: "careersAnim",
    method: "restart",
  },
  {
    index: 5,
    direction: "down",
    secIndex: 5,
    secDirection: "up",
    animation: "careersAnim",
    method: "reverse",
  },
  {
    index: 5,
    direction: "down",
    secIndex: 7,
    secDirection: "up",
    animation: "customersAnim",
    method: "restart",
  },
  {
    index: 6,
    direction: "down",
    secIndex: 6,
    secDirection: "up",
    animation: "customersAnim",
    method: "reverse",
  },
  {
    index: 6,
    direction: "down",
    secIndex: 8,
    secDirection: "up",
    animation: "contactAnim",
    method: "restart",
  }, {
    index: 7,
    direction: "down",
    secIndex: 7,
    secDirection: "up",
    animation: "contactAnim",
    method: "reverse",
  }
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
  normalScrollElements: ".aboutUs-body-text, .services-body__right, .swiper-mobile__container, .section__navigation  .careersArea",

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
          sectAnim.careers.resume();
          break;          
        case 6:
          scroll.customersAnim.resume();
          break;
        case 7:
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
Careers
---------- */

let careerDiv = document.querySelectorAll('.careerDiv')

careerDiv.forEach(element => {
  let careerBtn = element.querySelector('.careerBtn');
  let listDiv = element.querySelector('.listDiv');
  let resumeDiv = element.querySelector('.resumeDiv');
  let backBtn = element.querySelector('.backButton');
  let sendBtn = element.querySelector('.sendResumeBtn');
  let dragInput = element.querySelector('.dragInput')
  let dragFileHere = element.querySelector('.dragFileHere');
  let fileDiv = element.querySelector('.fileDiv')
  let forOpacity = element.querySelector('.forOpacity')


  careerBtn.addEventListener('click', () => {
    listDiv.classList.toggle("nonDisplay")
    resumeDiv.classList.remove("nonDisplay")

    forOpacity.style.display = "none"
  })
  
  backBtn.addEventListener('click', () => {
    listDiv.classList.remove("nonDisplay")
    resumeDiv.classList.toggle("nonDisplay")

    dragFileHere.innerHTML = "Drag file here"
    dragFileHere.style.color = "white"
    dragInput.value = null
    fileDiv.style.border = '2px dashed #ffffff'
    fileDiv.style.backgroundColor = "#131c1b"
    forOpacity.style.display = "block"
    forOpacity.style.opacity = '0'

  })

  let sendSuccesuly = false

  const sendEmail =  ({data, name, title, mail}) => {
    Email.send({
      Host : "smtp.mailtrap.io",
      Username : "1343361ee70820",
      Password : "85fb7bb85e2cbb",
      To : 'naghd15@freeuni.edu.ge',
      From : mail,
      Subject : "Ozorix",
      Body : `<html>
              <h1>resume for ${title} </h1>
          </html>`,
          Attachments : [
    {
      name,
      data
    }]
  }).then(msg => {
    console.log(msg)
    console.log(msg == 'OK')
    sendSuccesuly = msg == "OK"
  })
  }


  let data

  dragInput.addEventListener('change', (e) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(dragInput.files[0])
     fileReader.addEventListener('load', (file) => {
        data = fileReader.result
      })
  })

  
  //Sending resume
  sendBtn.addEventListener('click', () => {
    let file = element.querySelector('.dragInput');
    let title = element.querySelector('.title').innerHTML;
    let mail = element.querySelector('.mailInput').value;
    let message = element.querySelector(".message");
    

    
    if(mail && file.files.length && file.files[0].size <= 15000000){
      
      Email.send({
        Host : "smtp.mailtrap.io",
        Username : "1343361ee70820",
        Password : "85fb7bb85e2cbb",
        To : 'naghd15@freeuni.edu.ge',
        From : mail,
        Subject : "Ozorix",
        Body : `<html>
                <h1>resume for ${title} </h1>
            </html>`,
            Attachments : [
      {
        name: file.files[0].name,
        data
      }]
    }).then(msg => {
      console.log(msg)
      if(msg == "OK"){
        listDiv.classList.remove("nonDisplay")
        resumeDiv.classList.toggle("nonDisplay")
  
        dragFileHere.innerHTML = "Drag file here"
        dragFileHere.style.color = "white"
        dragInput.value = null
        fileDiv.style.border = '2px dashed #ffffff'
        forOpacity.style.opacity = '0'
        fileDiv.style.backgroundColor = "#131c1b"
  
        message.classList.remove("nonDisplay")
        setTimeout(() => {
          message.classList.add("nonDisplay")
        }, 3000)
        element.querySelector('.mailInput').value = ""
      }else{
        alert(msg)
      }
    })
    }
  })

})




careerDiv.forEach(element => {
  let dragInput = element.querySelector('.dragInput');
  let listDiv = element.querySelector('.listDiv');
  let resumeDiv = element.querySelector('.resumeDiv');
  let dragFileHere = element.querySelector('.dragFileHere');
  let fileDiv = element.querySelector('.fileDiv')
  let forOpacity = element.querySelector('.forOpacity')


  dragInput.addEventListener('change', (e) => {
    e.preventDefault()
    listDiv.classList.add("nonDisplay")
    resumeDiv.classList.remove("nonDisplay")

    let fileName = dragInput.files[0].name
    dragFileHere.innerHTML = fileName

    fileDiv.style.border = '1px solid'
    forOpacity.style.opacity = '0'
    fileDiv.style.backgroundColor  = '#48bfae'
    dragFileHere.style.color = 'black'
  })


  let dragInputDiv  = element.querySelector('.dragInputDiv')
  dragInputDiv.addEventListener('dragover', () => {
    forOpacity.style.opacity = '0.7'
    fileDiv.style.backgroundColor = "#48bfae"
    dragFileHere.style.color = 'black'

  })
  dragInputDiv.addEventListener('dragleave', () => {
    forOpacity.style.opacity = '0'

    fileDiv.style.backgroundColor = "#131c1b"
    dragFileHere.style.color = 'white'

  })

  dragInputDiv.addEventListener('drop', () => {
    forOpacity.style.opacity = '0'
    forOpacity.style.display = "none"
  })


})

