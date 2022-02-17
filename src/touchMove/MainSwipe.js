const swipeButton = document.querySelector(".services__mobile--SVGG-swipe");
const serviceCover = document.querySelector(".services__mobile--SVG");
const serviceCovetest1 = document.querySelector("#services");

const swipeButton2 = document.querySelector(".projects__mobile--SVGG-swipe");
const projectCover = document.querySelector(".projects__mobile--SVG");

const swipeButton3 = document.querySelector(".contact__mobile--SVGG-swipe");
const contactCover = document.querySelector(".contact__mobile--SVG");

serviceCover.addEventListener("mouseup", function () {
  serviceCover.style.transition = "transform 1s ease-in";
  serviceCover.style.transform = "translateX(100%)";
  document.querySelector(".services-body__right").style.visibility = "visible";
});

projectCover.addEventListener("mouseup", function () {
  projectCover.style.transition = "transform 1s ease-in";
  projectCover.style.transform = "translateX(-150%)";
  document.querySelector(".project-body__right").style.visibility = "visible";
});

contactCover.addEventListener("mouseup", function () {
  contactCover.style.transition = "transform 1s ease-in";
  contactCover.style.transform = "translateX(150%)";
  document.querySelector(".contact-body__right").style.visibility = "visible";
});

serviceCover.addEventListener("touchmove", () => {
  userHasScrolled = true;
});




// serviceCover2.addEventListener('touchmove', () => {
//     userHasScrolled = true
// })

// serviceCover3.addEventListener('touchmove', () => {
//     userHasScrolled = true
// })

// document.addEventListener('touchstart', handleTouchStart, false);
// document.addEventListener('touchmove', handleTouchMove, false);

serviceCover.addEventListener("touchstart", handleTouchStart, { capture: true });
serviceCover.addEventListener("touchmove", handleTouchMove, { capture: true });

projectCover.addEventListener("touchstart", handleTouchStart3, { capture: true });
projectCover.addEventListener("touchmove", handleTouchMove3, { capture: true });



contactCover.addEventListener("touchstart", handleTouchStart2, { capture: true });
contactCover.addEventListener("touchmove", handleTouchMove2, { capture: true });

serviceCover.addEventListener("click", handleTouchMove, { capture: true });

projectCover.addEventListener("click", handleTouchMove3, { capture: true });

contactCover.addEventListener("click", handleTouchMove2, { capture: true });

let xDown = null;
let yDown = null;

function getTouches(evt) {
  return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {/* most significant*/
    if (xDiff > 0) {
    } else {
      serviceCover.style.transition = "transform 1s ease-in";
      serviceCover.style.transform = "translateX(100%)";
      document.querySelector(".services-body__right").style.visibility = "visible";
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
}

function handleTouchStart2(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove2(evt) {



  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {/* most significant*/
    if (xDiff > 0) {
      // left swipe

    } else {
      // swipe right
      contactCover.style.transition = "transform 1s ease-in";
      contactCover.style.transform = "translateX(150%)";
      document.querySelector(".contact-body__right").style.visibility = "visible";
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
}

function handleTouchStart3(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

function handleTouchMove3(evt) {
  if (!xDown || !yDown) {
    return;
  }

  let xUp = evt.touches[0].clientX;
  let yUp = evt.touches[0].clientY;

  let xDiff = xDown - xUp;
  let yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {/* most significant*/
    if (xDiff > 0) {
      // left swipe
      projectCover.style.transition = "transform 1s ease-in";
      projectCover.style.transform = "translateX(-150%)";
      document.querySelector(".project-body__right").style.visibility = "visible";
      let bulletws = document.querySelector(".mobile__pagination").children;
      Array.from(bulletws).forEach((el, index) => {
        index++;
        let zero = "0";
        if (index > 9) {
          zero = "";
        }

        el.innerHTML = zero + index;
      });
    } else {
      // swipe right
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
}



// for blogs and careers touchscroll

let blogsArea = document.querySelector('.blogsArea')
let careersArea = document.querySelector('.careersArea')

blogsArea.addEventListener('touchmove', () => {
  $.fn.fullpage.setAllowScrolling(false);
})
blogsArea.addEventListener('touchend', () =>{
  $.fn.fullpage.setAllowScrolling(true);
})

careersArea.addEventListener('touchmove', () => {
  $.fn.fullpage.setAllowScrolling(false);
})
careersArea.addEventListener('touchend', () =>{
  $.fn.fullpage.setAllowScrolling(true);
})
