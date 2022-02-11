import gsap from "gsap";
import { config } from "../content/config";

/* --------
Home animation section
---------- */
export let checkGsapActive;
let sectionAnimation = () => {

  let homeAnimation = () => {
    let home = gsap.timeline({ defaults: { opacity: 0, ease: "none" } });
    home.from(".home__title-svg0", { duration: 1, opacity: 0 });

    for (let i = 1; i <= 37; i++) {
      home.from(".home__title-svg" + i, { duration: config.home.titleSpeed });
    }

    home.from(".home__title-svg39", { duration: 1.5, opacity: 0 });
    home.from(".home__header", { duration: 0.5, opacity: 0 }, "-=1");

    home.pause();
    return home;
  };

  /* --------
   about us animation section
  ---------- */
  let aboutUsAnimation = () => {
    let aboutUs = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

    aboutUs
      .from(".aboutUs-left__bracket", { duration: 1, opacity: 0, delay: config.aboutUs.delay })
      .from(".aboutUs-title1", { stagger: 0.15, duration: config.aboutUs.titleSpeed, opacity: 0, delay: 0 }, "-=0.1")
      .from(".aboutUs-right__bracket", { duration: 1, opacity: 0, }, "-=0.1")
      .from(".aboutUs-arrow", { duration: 0.5, xPercent: -50, opacity: 0, ease: "none" }, "-=0.1")
      .from(".aboutUs-spider", { stagger: 0.55, yPercent: 50, opacity: 0, duration: 1 }, "-=0.1")
      .from(".aboutUs-works__right", { stagger: 0.1, duration: 3, opacity: 0, }, "-=0.1")
      .from(".aboutUs-body-text", { duration: 3, opacity: 0, }, 1);

    aboutUs.pause();
    return aboutUs;
  };

  /* --------
   services animation section
  ---------- */
  let servicesAnimation = () => {
    let services = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

    services.from(".services-svg__column", { duration: 1, opacity: 0, delay: config.services.delay });
    for (let i = 1; i <= 25; i++) {
      services.from(".services-svg" + i, { duration: config.services.titleSpeed, opacity: 0, });
    }

    services
      .from(".servicesSvg1", { stagger: 0.1, duration: 0.3, opacity: 0, })
      .from(".services__blackhead", { duration: 2, yPercent: -50, opacity: 0, })
      .from(".services-head__icon", { duration: 2, yPercent: 30, opacity: 0, }, "<")
      .from(".worksJustRight", { stagger: 0.1, duration: 3, opacity: 0, })
      .from(".service--body-text", { stagger: 0.5, yPercent: 50, duration: 0.5, opacity: 0, ease: "none" }, 1).then(() => {
        document.querySelector(".services-body__right").style.overflowY = "auto";
      });

    services.pause();
    return services;
  };

  /* --------
   contact animation section
  ---------- */
  let contactAnimation = () => {
    let contact = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });

    contact.from(".contact-leftSvg__bracket", { duration: 0.5, opacity: 0, delay: config.contact.delay });

    for (let i = 1; i <= 24; i++) {
      contact.from(".contact-title" + i, { duration: config.contact.titleSpeed, opacity: 0, });
    }

    contact
      .from(".contact-rightSvg__bracket", { duration: 1, opacity: 0, })
      .from(".contact__ellipse", { duration: 2, yPercent: -30, opacity: 0, }, "-=0.4")
      .from(".contact-works__right", { stagger: 0.1, duration: 3, opacity: 0 }, "-=1")
      .from(".contact__ayes", { duration: 0.5, xPercent: 100, opacity: 0, }, "<")
      .from(".contact__info", { duration: 3, opacity: 0, }, "1")
      .from(".map__container", { duration: 3, opacity: 0, }, "1")
      .from(".contact-rectangle", { duration: 0.5, xPercent: -30, opacity: 0, }, "<");

    contact.pause();
    return contact;
  };

  /* --------
   projects animation section
  ---------- */
  let projectAnimation = () => {
    let project = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
    project.from(".project-leftSvg__bracket", { duration: 0.5, opacity: 0, delay: config.projects.delay });

    for (let i = 1; i <= 17; i++) {
      project.from(".project-title" + i, { duration: config.projects.titleSpeed, opacity: 0 });
    }

    project
      .from(".project__rectangle", { duration: 1.5, xPercent: -100, opacity: 0, delay: 0.1 })
      .from("#Group_936", { duration: 1.5, xPercent: -100, opacity: 0, }, "<")
      .from(".project-rightSvg__bracket", { duration: 2, opacity: 0 })
      .from(".swiper__lg", { duration: 3, opacity: 0 }, "1")
      .from(".project-works__right", { stagger: 0.1, duration: 3, opacity: 0 })
      .from(".rocket", {duration: 1.5, y: 700}, "1")
      .to(".project__helicopter", { duration: 18, yPercent: -800 }, "<");

    project.pause();
    return project;
  };



    /* --------
   blogs animation section
  ---------- */
  let blogsAnimation = () => {
    let blogs = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
  
    blogs
      .from(".glass", {duration: 1.5, x: -700})
      .from(".glass1", {duration: 1.5, x: 700}, "<")
      .from(".blogDiv", {duration: 0.1,  stagger: 0.3, y: -500, opacity: 0})
      .from(".learnToCode", {duration: 3.3, y: 500, opacity:0 , ease: "elastic.out(1, 0.3)"})
  
    blogs.pause();
    return blogs;
  };



    /* --------
   careers animation section
  ---------- */
  let careersAnimation = () => {
    let careers = gsap.timeline({ defaults: { opacity: 0, ease: "back" } });
  
    careers
      .from(".careersLeftSvg1", {duration: 1.3, x: -700})
      .from(".careersLeftSvg2", {duration: 1.9, y: 500, opacity:0 , ease: "elastic.out(1, 0.3)"})
  
    careers.pause();
    return careers;
  };




  return {
    home: homeAnimation(),
    aboutUs: aboutUsAnimation(),
    project: projectAnimation(),
    services: servicesAnimation(),
    contact: contactAnimation(),
    blogs: blogsAnimation(),
    careers: careersAnimation()
  };
};

export let sectAnim = sectionAnimation();

/* --------
 scroll animation section
---------- */
let ScrollAnimations = () => {
  let servicesAnim = gsap.timeline();

  servicesAnim
    .from(".services-body__left", { duration: 1, x: -500, opacity: 0 })
    .from(".services-body__right", { duration: 1, x: 500, opacity: 0 }, "<");

  let aboutUsAnim = gsap.timeline();

  aboutUsAnim
    .from(".aboutUs-body__left", { duration: 1, x: -500, opacity: 0 })
    .from(".aboutUs-body__right", { duration: 1, x: 500, opacity: 0 }, "<");

  let projectAnim = gsap.timeline();

  projectAnim
    .from(".project-body__left", { duration: 1, x: -500, opacity: 0 })
    .from(".project-body__right", { duration: 1, x: 500, opacity: 0 }, "<");

    let customersAnim = gsap.timeline();

    customersAnim
      .from(".customers-left__slide", { duration: 1.5, x: 1300 })
      .from(".customers-right__slide", { duration: 1.5, x: - 1300 }, "<");
  
    let contactAnim = gsap.timeline();
  
    contactAnim
      .from(".contact-body__left", { duration: 1, x: -500, opacity: 0 })
      .from(".contact-body__right", { duration: 1, x: 500, opacity: 0 }, "<");

    let blogsAnim = gsap.timeline();

    blogsAnim
    .from(".blogs-body__left", { duration: 1, x: -1000,  })
    .from(".blogs-body__right", { duration: 1, x: 1000,  }, "<", );

    let careersAnim = gsap.timeline()

    careersAnim
    .from(".careers-body__left", { duration: 1, x: -1000,  })
    .from(".careers-body__right", { duration: 1, x: 1000,  }, "<", );

  return {
    servicesAnim,
    aboutUsAnim,
    projectAnim,
    customersAnim,
    contactAnim,
    blogsAnim,
    careersAnim
  };
};

export let scroll = ScrollAnimations();

/* --------
 make animations responsive.
---------- */
let gsapMethods = (gsapObject, method) => {
  Object.keys(gsapObject).map(key => {
    gsapObject[key][method]();
  });
};

function navigationResponsive(x) {
  if (x.matches) {
    checkGsapActive = false;

    Object.keys(sectAnim).map(key => {
      sectAnim[key].totalProgress(1).kill();
    });

    gsapMethods(scroll, "restart");
  } else {
    gsapMethods(scroll, "restart");
    checkGsapActive = true;
  }
}

let w = window.matchMedia("(max-width: 1200px)");
navigationResponsive(w);

w.addListener(navigationResponsive);
