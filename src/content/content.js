import { config } from "./config";

// about us content
let aboutUsText = document.querySelector(".aboutUs__text");
aboutUsText.innerHTML = config.aboutUsTextData;





// contact content

let contactObj = [
  { class: ".contact__mobile", config: "mobile" },
  { class: ".contact__phone", config: "mobileInit", href: "mobileHref" },
  { class: ".contact-address__title", config: "address" },
  { class: ".contact-address__Initials", config: "addressInit" },
  { class: ".contact__email", config: "email" },
  { class: ".contact-email__initial", config: "emailInit", href: "emailHref" },
  { class: ".contact__opening", config: "opening" },
  { class: ".contact-opening__initials", config: "openingInit" },
];

contactObj.map(contact => {
  document.querySelector(contact.class).innerHTML = config.contactTextData[contact.config];
  if (contact.href) {
    if (contact.href) {
      document.querySelector(contact.class).setAttribute("href", config.contactTextData[contact.href]);
    }
  }
});

let customersObj = [
  { name: "customers-1-1", href: "customers-1-1Href" },
  { name: "customers-1-2", href: "customers-1-2Href" },
  { name: "customers-1-3", href: "customers-1-3Href" },
  { name: "customers-2-1", href: "customers-2-1Href" },
  { name: "customers-2-2", href: "customers-2-2Href" },
  { name: "customers-2-3", href: "customers-2-3Href" },
  { name: "customers-3-1", href: "customers-3-1Href" },
  { name: "customers-3-2", href: "customers-3-2Href" },
  { name: "customers-3-3", href: "customers-3-3Href" },
  { name: "customers-4-1", href: "customers-4-1Href" },

];

customersObj.map(service => {
  document.querySelector("." + service.name).innerHTML = config.customersTextData[service.name];
  document.querySelector("." + service.name).setAttribute("href", config.customersTextData[service.href]);
});

// services content

let servicesObj = [
  { title: "services-1-1__title", ul: "services-1-1__ul" },
  { title: "services-1-2__title", ul: "services-1-2__ul" },
  { title: "services-1-3__title", ul: "services-1-3__ul" },
  { title: "services-2-1__title", ul: "services-2-1__ul" },
  { title: "services-2-2__title", ul: "services-2-2__ul" },
  { title: "services-2-3__title", ul: "services-2-3__ul" },
  { title: "services-3-1__title", ul: "services-3-1__ul" },
  { title: "services-3-2__title" },
  { title: "services-3-2__title1" },
];

servicesObj.map(service => {
  document.querySelector("." + service.title).innerHTML = config.servicesTextData[service.title];
  if (service.ul) {
    document.querySelector("." + service.ul).innerHTML = config.servicesTextData[service.ul];
  }
});

let ul = document.querySelector(".swiper-wrapper");
let ulMobile = document.querySelector(".swiper__mobile");

config.ProjectTextData.forEach(item => {

  let helperDiv = document.createElement("div");
  let li = document.createElement("li");
  let projectLeftBracket = document.createElement("img");
  let projectRightBracket = document.createElement("img");
  let visitWebsite = document.createElement("a");
  let visitWebsiteWrapper = document.createElement("div");
  let index = document.createElement("p");
  let header = document.createElement("h4");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");

  // creating structure
  li.appendChild(helperDiv);
  ul.appendChild(li);
  helperDiv.appendChild(index);
  helperDiv.appendChild(header);

  helperDiv.appendChild(p1);
  helperDiv.appendChild(p2);
  helperDiv.appendChild(projectRightBracket);
  helperDiv.appendChild(visitWebsite);
  helperDiv.appendChild(projectLeftBracket);
  visitWebsiteWrapper.appendChild(projectRightBracket);
  visitWebsiteWrapper.appendChild(visitWebsite);
  visitWebsiteWrapper.appendChild(projectLeftBracket);
  helperDiv.appendChild(visitWebsiteWrapper);

  // adding value
  index.innerText = item.index;
  header.innerText = item.name;

  p1.innerText = item.description;
  p2.innerText = item.tech;
  visitWebsite.innerText = "Visit Website";
  visitWebsite.setAttribute("href", item.href);
  li.classList.add("swiper-slide");
  p2.classList.add("footer");
  index.classList.add("index");
  visitWebsiteWrapper.classList.add("visit__website");
  projectRightBracket.src = "./assets/Projects/projectLeftBracket.svg";
  projectLeftBracket.src = "./assets/Projects/projectRightBracket.svg";

  let liMobile = document.createElement("li");
  let mHelperDiv = document.createElement("div");
  let projectLeftBracketMobile = document.createElement("img");
  let projectRightBracketMobile = document.createElement("img");
  let visitWebsiteMobile = document.createElement("a");
  let visitWebsiteWrapperMobile = document.createElement("div");
  let headerMobile = document.createElement("h4");
  let header2mobile = document.createElement("h4");
  let headerSpanMobile = document.createElement("span");
  let p1mobile = document.createElement("p");
  let p2mobile = document.createElement("p");

  liMobile.appendChild(mHelperDiv);
  ulMobile.appendChild(liMobile);
  mHelperDiv.appendChild(headerMobile);
  mHelperDiv.appendChild(header2mobile);
  mHelperDiv.appendChild(headerSpanMobile);
  mHelperDiv.appendChild(p1mobile);
  mHelperDiv.appendChild(p2mobile);
  mHelperDiv.appendChild(projectRightBracketMobile);
  mHelperDiv.appendChild(visitWebsiteMobile);
  mHelperDiv.appendChild(projectLeftBracketMobile);
  visitWebsiteWrapperMobile.appendChild(projectRightBracketMobile);
  visitWebsiteWrapperMobile.appendChild(visitWebsiteMobile);
  visitWebsiteWrapperMobile.appendChild(projectLeftBracketMobile);
  mHelperDiv.appendChild(visitWebsiteWrapperMobile);

  headerMobile.innerText = item.name;
  headerSpanMobile.innerText = item.header_span;
  p1mobile.innerText = item.description;
  p2mobile.innerText = item.tech;
  visitWebsiteMobile.innerText = "Visit Website";
  visitWebsiteMobile.setAttribute("href", item.href);
  liMobile.classList.add("swiper-slide");
  p2mobile.classList.add("footer");
  visitWebsiteWrapperMobile.classList.add("visit__website");
  projectRightBracketMobile.src = "./assets/Projects/projectLeftBracket.svg";
  projectLeftBracketMobile.src = "./assets/Projects/projectRightBracket.svg";

});

document.querySelector(".facebook").setAttribute("href", config.socialLinks.facebook);
document.querySelector(".twitter").setAttribute("href", config.socialLinks.twitter);
document.querySelector(".instagram").setAttribute("href", config.socialLinks.instagram);








//blogs area

let blogsArea = document.querySelector(".blogsArea")
let {blogData} = config


blogData.forEach(blogData => {
  let blogsDiv = document.createElement('div');
  blogsDiv.classList.add('blogDiv');
  
  let title = document.createElement('p')
  title.classList.add('title')
  title.innerHTML = blogData.title

  let blog = document.createElement('p')
  blog.classList.add('blog')
  blog.innerHTML= blogData.text

  let dots = document.createElement('span')
  dots.classList.add('dots')
  dots.innerHTML = '...'
  blog.appendChild(dots)

  let moreText = document.createElement('span')
  moreText.classList.add('moreText')
  moreText.innerHTML = blogData.moreText
  blog.appendChild(moreText)

  let buttonDiv = document.createElement('div')
  buttonDiv.classList.add('buttonDiv')


  let leftBracket = document.createElement('img')
  leftBracket.classList.add('buttonLeftBracket')
  leftBracket.src = "./assets/shared/buttonBracketLeft.svg"

  let blogBtn = document.createElement('button')
  blogBtn.classList.add('blogBtn')
  blogBtn.innerHTML = 'Read more'

  let rightBracket = document.createElement('img')
  rightBracket.classList.add('buttonRightBracket')
  rightBracket.src = "./assets/shared/buttonBracketRight.svg"


  buttonDiv.appendChild(leftBracket)
  buttonDiv.appendChild(blogBtn)
  buttonDiv.appendChild(rightBracket)


  blogsDiv.appendChild(title)
  blogsDiv.appendChild(blog)
  blogsDiv.appendChild(buttonDiv)

  
  blogsArea.appendChild(blogsDiv)
})




//careers area

let {careersData} = config
let careersArea = document.querySelector('.careersArea')

careersData.forEach(career => {

  
  //message div
  let messageDiv = document.createElement('div')
  messageDiv.classList.add('message')
  messageDiv.classList.add('nonDisplay')
  let message = document.createElement('p')
  message.innerHTML = "Succesfuly sent!"
  messageDiv.appendChild(message)
  
  
  // list div
  let listDiv = document.createElement('div')
  listDiv.classList.add('listDiv')
  
  let titleDiv = document.createElement('div')
  let title = document.createElement('p');
  title.classList.add('title')
  title.innerHTML = career.title
  titleDiv.appendChild(title)
  let list = document.createElement('div')
  list.innerHTML = career.list

  let careerButtonDiv = document.createElement('div')
    let buttonDiv = document.createElement('div')
    buttonDiv.classList.add('buttonDiv')
        let buttonLeftBracket = document.createElement('img')
        buttonLeftBracket.src = "./assets/shared/buttonBracketLeft.svg"
        buttonLeftBracket.classList.add('buttonLeftBracket')

        let careerButton = document.createElement('button')
        careerButton.classList.add('careerBtn')
        careerButton.innerHTML = 'Send resume'

        let buttonRightBracket = document.createElement('img')
        buttonRightBracket.src = "./assets/shared/buttonBracketRight.svg"
        buttonRightBracket.classList.add('buttonRightBracket')

        buttonDiv.appendChild(buttonLeftBracket)
        buttonDiv.appendChild(careerButton)
        buttonDiv.appendChild(buttonRightBracket)


        

    careerButtonDiv.appendChild(buttonDiv)
    

  listDiv.appendChild(titleDiv)
  listDiv.appendChild(list)
  listDiv.appendChild(careerButtonDiv)

  //resume div
  let resumeDiv = document.createElement('div')
  resumeDiv.classList.add('resumeDiv')
  resumeDiv.classList.add('nonDisplay')

        let fileDiv = document.createElement('div')
        fileDiv.classList.add('fileDiv')

            let label = document.createElement('label')
            label.classList.add('label')

            let fileInput = document.createElement('input')
            fileInput.type = 'file'
            fileInput.classList.add('file')
            let inputSpan = document.createElement('span')
              inputSpan.innerHTML = 'Select a file'

              label.appendChild(fileInput)
              label.appendChild(inputSpan)

              fileDiv.appendChild(label)

        let mailDiv = document.createElement('div')
        mailDiv.classList.add('mailDiv')

            let mailInput = document.createElement('input')
            mailInput.classList.add('mailInput')
            mailInput.placeholder = 'Mail'
            mailDiv.appendChild(mailInput)

            let buttonParent = document.createElement('div')
            buttonParent.classList.add('buttonParent')

                let sendButtonDiv = document.createElement('div')
                sendButtonDiv.classList.add('buttonDiv')


                      let buttonLeftBracket1 = document.createElement('img')
                      buttonLeftBracket1.src = "./assets/shared/buttonBracketLeft.svg"
                      buttonLeftBracket1.classList.add('buttonLeftBracket')
              
                      let sendResumeBtn = document.createElement('button')
                      sendResumeBtn.classList.add('sendResumeBtn')
                      sendResumeBtn.innerHTML = 'Send resume'
              
                      let buttonRightBracket1 = document.createElement('img')
                      buttonRightBracket1.src = "./assets/shared/buttonBracketRight.svg"
                      buttonRightBracket1.classList.add('buttonRightBracket')

                      sendButtonDiv.appendChild(buttonLeftBracket1)
                      sendButtonDiv.appendChild(sendResumeBtn)
                      sendButtonDiv.appendChild(buttonRightBracket1)


                      ////////
                      let backBtnDiv = document.createElement('div')
                      backBtnDiv.classList.add('buttonDiv')
      
      
                            let buttonLeftBracket2 = document.createElement('img')
                            buttonLeftBracket2.src = "./assets/shared/buttonBracketLeft.svg"
                            buttonLeftBracket2.classList.add('buttonLeftBracket')
                    
                            let backBtn = document.createElement('button')
                            backBtn.classList.add('backButton')
                            backBtn.innerHTML = 'back'
                    
                            let buttonRightBracket2 = document.createElement('img')
                            buttonRightBracket2.src = "./assets/shared/buttonBracketRight.svg"
                            buttonRightBracket2.classList.add('buttonRightBracket')
      
                            backBtnDiv.appendChild(buttonLeftBracket2)
                            backBtnDiv.appendChild(backBtn)
                            backBtnDiv.appendChild(buttonRightBracket2)




            buttonParent.appendChild(sendButtonDiv)
            buttonParent.appendChild(backBtnDiv)

  resumeDiv.appendChild(fileDiv)
  resumeDiv.appendChild(mailDiv)
  resumeDiv.appendChild(buttonParent)
  
  let careerDiv = document.createElement('div')
  careerDiv.classList.add('careerDiv')



  careerDiv.appendChild(messageDiv)
  careerDiv.appendChild(listDiv)
  careerDiv.appendChild(resumeDiv)

  careersArea.appendChild(careerDiv)
})


