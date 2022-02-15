import { scroll, sectAnim } from "../gsap/index";


function navHover(element, hoverElement) {
  document.querySelector(element).addEventListener("mouseenter", () => {
    Array.from(document.getElementsByClassName(hoverElement)).forEach(
      el => {
        el.style.opacity = "1";
      }
    );
  });

  document.querySelector(element).addEventListener("mouseleave", () => {
    Array.from(document.getElementsByClassName(hoverElement)).forEach(
      el => {

        el.style.opacity = "0";
      }
    );
  });
}

navHover(".nav-home", "home-hover");
navHover(".nav-services", "services-hover");
navHover(".nav-blogs", "blogs-hover");
navHover(".nav-careers", "careers-hover");
navHover(".nav-projects", "projects-hover");
navHover(".nav-customers", "customers-hover");
navHover(".nav-contact", "contact-hover");
navHover(".nav-aboutUs", "aboutUs-hover");


Array.from(document.getElementsByClassName("header__menu")).forEach(
  el => {
    el.addEventListener("click", () => {
      document.querySelector(".section__navigation").style.display = "block";
    });
  }
);

document.querySelector(".section__navigation-close").addEventListener("click", () => {
  document.querySelector(".section__navigation").style.display = "none";
  sectAnim.home.resume();
});

Array.from(document.getElementsByClassName("mnav-close")).forEach(
  el => {
    el.addEventListener("click", () => {
      document.querySelector(".section__navigation").style.display = "none";
    });
  }
);

/* --------
  restart Scroll animation when user will click on the scroll
 ---------- */
function navigation(services, projects, customers, contact, aboutUs, blogs, careers) {
  document.querySelector(services).addEventListener("click", () => {
    scroll.servicesAnim.restart();
  });

  document.querySelector(projects).addEventListener("click", () => {
    scroll.projectAnim.restart();
  });

  document.querySelector(customers).addEventListener("click", () => {
    scroll.customersAnim.restart();
  });

  document.querySelector(contact).addEventListener("click", () => {
    scroll.contactAnim.restart();
  });

  document.querySelector(aboutUs).addEventListener("click", () => {
    scroll.aboutUsAnim.restart();
  });
  document.querySelector(blogs).addEventListener("click", () => {
    scroll.blogsAnim.restart();
  });
  document.querySelector(careers).addEventListener("click", () => {
    scroll.careersAnim.restart();
  });
}

navigation(".nav-services", ".nav-projects", ".nav-customers", ".nav-contact", ".nav-aboutUs", ".nav-blogs", ".nav-careers");
navigation(".navigator--services", ".navigator--projects", ".navigator--customers", ".navigator--contact", ".navigator--aboutUs", ".navigator--blogs", ".navigator--careers");
