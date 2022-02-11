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




let blogsArea = document.querySelector(".blogsArea")
