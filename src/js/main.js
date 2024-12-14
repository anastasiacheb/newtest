//import './alert.js'

let navMenu = document.querySelector(".nav__wrap");
let navBurger = document.querySelector(".nav__burger");
let navClose = document.querySelector(".nav__close");
let navLink = document.querySelectorAll(".nav__link");


navBurger.addEventListener("click", () => {
    navMenu.classList.remove("invisible");
})

navClose.addEventListener("click", () => {
    navMenu.classList.add("invisible");
})

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
        navMenu.classList.add("invisible");
    })
}

navBurger.addEventListener("click", disableScroll);
navClose.addEventListener("click", enableScroll);

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", enableScroll);
}

let telMenu = document.querySelector(".nav__telephone");
let telBurger = document.querySelector(".nav__contact");
let telBurger2 = document.querySelector(".footer__contact");
let telClose = document.querySelector(".nav__close-tel");

telBurger.addEventListener("click", () => {
  telMenu.classList.remove("invisible");
})

telBurger2.addEventListener("click", () => {
  telMenu.classList.remove("invisible");
})

telClose.addEventListener("click", () => {
  telMenu.classList.add("invisible");
})

telBurger.addEventListener("click", disableScroll);
telBurger2.addEventListener("click", disableScroll);
telClose.addEventListener("click", enableScroll);

var rellax = new Rellax('.rellax');

let popup1Button = document.querySelectorAll(".button_popup1");
let popup1 = document.querySelector(".popup1");
let popup1Wrap = document.querySelector(".popup1__wrap")
let popup1Close = document.querySelector(".close_popup1");

for (let i = 0; i < popup1Button.length; i++) {
  popup1Button[i].addEventListener("click", () => {
    popup1.classList.remove("invisible");
  })
}

popup1Close.addEventListener("click", () => {
  popup1.classList.add("invisible");
})

popup1Wrap.addEventListener("click", (e) => {
  e.stopPropagation();
})

popup1.addEventListener("click", enableScroll);
popup1Close.addEventListener("click", enableScroll);
for (let i = 0; i < popup1Button.length; i++) {
  popup1Button[i].addEventListener("click", disableScroll)
}


let popup2Button = document.querySelectorAll(".button_popup2");
let popup2 = document.querySelector(".popup2");
let popup2Wrap = document.querySelector(".popup2__wrap")
let popup2Close = document.querySelector(".close_popup2");

for (let i = 0; i < popup2Button.length; i++) {
  popup2Button[i].addEventListener("click", () => {
    popup2.classList.remove("invisible");
  })
}

popup2Close.addEventListener("click", () => {
  popup2.classList.add("invisible");
})



popup2Wrap.addEventListener("click", (e) => {
  e.stopPropagation();
})

popup2.addEventListener("click", enableScroll);
popup2Close.addEventListener("click", enableScroll);
for (let i = 0; i < popup2Button.length; i++) {
  popup2Button[i].addEventListener("click", disableScroll)
}

let popup3Button = document.querySelectorAll(".button_popup3");
let popup3 = document.querySelector(".popup3");
let popup3Wrap = document.querySelector(".popup3__wrap")
let popup3Close = document.querySelector(".close_popup3");

for (let i = 0; i < popup3Button.length; i++) {
  popup3Button[i].addEventListener("click", () => {
    popup3.classList.remove("invisible");
  })
}

popup3Close.addEventListener("click", () => {
  popup3.classList.add("invisible");
})



popup3Wrap.addEventListener("click", (e) => {
  e.stopPropagation();
})

popup3.addEventListener("click", enableScroll);
popup3Close.addEventListener("click", enableScroll);
for (let i = 0; i < popup3Button.length; i++) {
  popup3Button[i].addEventListener("click", disableScroll)
}

let popup4Button = document.querySelectorAll(".button_popup4");
let popup4 = document.querySelector(".popup4");
let popup4Wrap = document.querySelector(".popup4__wrap")
let popup4Close = document.querySelector(".close_popup4");

for (let i = 0; i < popup4Button.length; i++) {
  popup4Button[i].addEventListener("click", () => {
    popup4.classList.remove("invisible");
    document.body.style.overflow = "hidden";
  })
}

popup4Close.addEventListener("click", () => {
  popup4.classList.add("invisible");
  document.body.style.overflow = "auto";
})

popup4Close.addEventListener("click", enableScroll);
for (let i = 0; i < popup4Button.length; i++) {
  popup4Button[i].addEventListener("click", disableScroll);
}


let popup5Button = document.querySelectorAll(".button_popup5");
let popup5 = document.querySelector(".popup5");
let popup5Wrap = document.querySelector(".popup5__wrap")
let popup5Close = document.querySelector(".close_popup5");

for (let i = 0; i < popup5Button.length; i++) {
  popup5Button[i].addEventListener("click", () => {
    popup5.classList.remove("invisible");
    //swiper12.reInit();
    //swiper12.update();
    swiper12.slideTo(i, true,true);
    swiper12.update();
    //swiper12.initialSlide = i;
  })
}

popup5Close.addEventListener("click", () => {
  popup5.classList.add("invisible");
  //swiper12.slideTo(0, false,true);
  swiper12.update();
  //swiper12.reInit();
})

popup5.addEventListener("click", enableScroll);
popup5Close.addEventListener("click", enableScroll);
for (let i = 0; i < popup5Button.length; i++) {
  popup5Button[i].addEventListener("click", disableScroll)
}

let inputName = document.querySelector(".input-name");
let inputTel = document.querySelector(".input-tel");
let inputSubmit = document.querySelector(".input-submit");

inputName.addEventListener("input", () => {
  if (inputName.validity.valueMissing || inputTel.value.length < 11) {
    inputSubmit.disabled = true;
} else if (inputName.validity.valid || inputTel.value.length == 11) {
  inputSubmit.disabled = false;
}
})

inputTel.addEventListener("input", () => {
  if (inputName.validity.valueMissing || inputTel.value.length < 11) {
    inputSubmit.disabled = true;
} else if (inputName.validity.valid || inputTel.value.length == 11) {
  inputSubmit.disabled = false;
}
})


let inputName1 = document.querySelector(".input-name1");
let inputTel1 = document.querySelector(".input-tel1");
let inputSubmit1 = document.querySelector(".input-submit1");

inputName1.addEventListener("input", () => {
  if (inputName1.validity.valueMissing || inputTel1.value.length < 11) {
    inputSubmit1.disabled = true;
} else if (inputName1.validity.valid || inputTel1.value.length == 11) {
  inputSubmit1.disabled = false;
}
})

inputTel1.addEventListener("input", () => {
  if (inputName1.validity.valueMissing || inputTel1.value.length < 11) {
    inputSubmit1.disabled = true;
} else if (inputName1.validity.valid || inputTel1.value.length == 11) {
  inputSubmit1.disabled = false;
}
})

let inputName2 = document.querySelector(".input-name2");
let inputTel2 = document.querySelector(".input-tel2");
let inputSubmit2 = document.querySelector(".input-submit2");
let inputText2 = document.querySelector(".input-text2");

inputName2.addEventListener("input", () => {
  if (inputName2.validity.valueMissing || inputText2.validity.valueMissing || inputTel2.value.length < 11) {
    inputSubmit2.disabled = true;
} else if (inputName2.validity.valid || inputText2.validity.valid || inputTel2.value.length == 11) {
  inputSubmit2.disabled = false;
}
})

inputTel2.addEventListener("input", () => {
  if (inputName2.validity.valueMissing || inputText2.validity.valueMissing || inputTel2.value.length < 11) {
    inputSubmit2.disabled = true;
} else if (inputName1.validity.valid || inputText2.validity.valid || inputTel2.value.length == 11) {
  inputSubmit2.disabled = false;
}
})

inputText2.addEventListener("input", () => {
  if (inputName2.validity.valueMissing || inputText2.validity.valueMissing || inputTel2.value.length < 11) {
    inputSubmit2.disabled = true;
} else if (inputName1.validity.valid || inputText2.validity.valid || inputTel2.value.length == 11) {
  inputSubmit2.disabled = false;
}
})

let footerMenu = document.querySelector(".footer__wrap");
let footerBurger = document.querySelector(".footer__burger");
let footerClose = document.querySelector(".footer__close");
let footerLink = document.querySelectorAll(".footer__link");


footerBurger.addEventListener("click", () => {
    footerMenu.classList.remove("invisible");
})

footerClose.addEventListener("click", () => {
    footerMenu.classList.add("invisible");
})

for (let i = 0; i < footerLink.length; i++) {
    footerLink[i].addEventListener("click", () => {
        footerMenu.classList.add("invisible");
    })
}

footerBurger.addEventListener("click", disableScroll);
footerClose.addEventListener("click", enableScroll);

for (let i = 0; i < footerLink.length; i++) {
  footerLink[i].addEventListener("click", enableScroll);
}

let scrollButton = document.querySelector(".scrolltop");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
      });
})

let text = document.querySelector(".section-one__text");
let image1 = document.querySelector(".section-one__image1");
let image2 = document.querySelector(".section-one__image2");

document.addEventListener("scroll", () => {
  //alert(textPos.x);
  let textPos = text.getBoundingClientRect();
  if (textPos.bottom >= 700) {
    image2.classList.add("invisible");
    image1.classList.remove("invisible");
  } else if (textPos.bottom < 700) {
    image1.classList.add("invisible");
    image2.classList.remove("invisible");
  }
})

function disableScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrollLeft = document.documentElement.scrollLeft;
  
  window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = function () { };
}

const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 640px
        460: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },

      // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next10',
        prevEl: '.swiper-button-prev10',
      },
  
    // If we need pagination
   /* pagination: {
      el: '.swiper-pagination',
    },
  
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });

  const swiper11 = new Swiper('.swiper11', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 640px
        460: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },

      // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next11',
        prevEl: '.swiper-button-prev11',
      },
  
    // If we need pagination
   /* pagination: {
      el: '.swiper-pagination',
    },
  
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });


  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    //direction: 'vertical',
    //loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 640px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      },

      // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        //prevEl: '.swiper-button-prev',
      },
  
    // If we need pagination
   /* pagination: {
      el: '.swiper-pagination',
    },
  
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },*/
  });

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    initialSlide: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  });

  const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    slidesPerView: 1.2,
      spaceBetween: 14,

      breakpoints: {
        460: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: "row",
          },
          spaceBetween: 18,
          slidesPerGroup: 2,
        },
        1050: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: "row",
          },
          spaceBetween: 18,
          slidesPerGroup: 3,
        },
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next2',
    },

    pagination: {
      el: '.swiper-pagination4',
      clickable: true,
    }
  });

  const swiper5 = new Swiper('.swiper5', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    spaceBetween: 16,
    slidesPerView: 1.2,
    speed: 600,

      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        
      },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
  });

  const swiper6 = new Swiper('.swiper6', {
    spaceBetween: 25,
    slidesPerView: "auto",
    loop: true,
    speed: 15000,
    freeMode: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    }
});

const slides8 = document.querySelectorAll('.swiper8-slide');
var swiper8 = new Swiper(".swiper8", {
  effect: "fade",
  autoHeight: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper8-button-next',
  },
  pagination: {
    el: ".swiper8-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="swiper8__bullet ' + className + '">' 
      + '<img src="' + slides8[index].dataset.image + '" alt="avatar" class="avatar avatar_center"> <p class="text_bold elem__tablet">' + slides8[index].dataset.name + '</p> </div>'
    },
  },
});

const slides7 = document.querySelectorAll('.swiper7-slide');
var swiper7 = new Swiper(".swiper7", {
  effect: "fade",
  autoHeight: true,
  slidesPerView: 'auto',
  pagination: {
    el: ".swiper7-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="pag pag-' + [index]+ ' ' + className + '">' + slides7[index].dataset.name + "</span>";
    },
  },
});

const slides71 = document.querySelectorAll('.swiper71-slide');
var swiper71 = new Swiper(".swiper71", {
  effect: "fade",
  autoHeight: true,
  pagination: {
    el: ".swiper71-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="pag pag-' + [index]+ ' ' + className + '">' + slides71[index].dataset.name + "</span>";
    },
  },
});


const swiper12 = new Swiper('.swiper12', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  

    // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next12',
      prevEl: '.swiper-button-prev12',
    },

  // If we need pagination
 /* pagination: {
    el: '.swiper-pagination',
  },

  

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});
  

  let accord = document.querySelectorAll(".card-acc");

  for (let i = 0; i < accord.length; i++) {
    accord[i].addEventListener("click", () => {
        let acc = accord[i].lastElementChild.lastElementChild;
        let accBtn = accord[i].firstElementChild.firstElementChild;
        let accTitle = accord[i].lastElementChild.firstElementChild
        if (acc.style.maxHeight) {
            acc.style.maxHeight = null;
            accBtn.classList.remove("active");
            accBtn.innerHTML = "+";
            accTitle.classList.remove("active");
          } else {
            acc.style.maxHeight = acc.scrollHeight + "px";
            accBtn.classList.add("active");
            accBtn.innerHTML = "&minus;";
            accTitle.classList.add("active");
          }
    })
  }

  let readBtn = document.querySelectorAll(".read-more-btn");

  
  for (let i = 0; i < readBtn.length; i++) {
    readBtn[i].addEventListener("click", () => {
      readBtn[i].classList.add("hidden");
      readBtn[i].previousElementSibling.classList.remove("hidden");
      readBtn[i].previousElementSibling.previousElementSibling.classList.remove("hidden");
      readBtn[i].previousElementSibling.previousElementSibling.previousElementSibling.classList.add("hidden");
      //readBtn[i].parentElement.parentElement.style.height = "auto";
      readBtn[i].parentElement.parentElement.parentElement.style.height = "auto";
      readBtn[i].parentElement.parentElement.parentElement.parentElement.style.height = "auto";
      //readBtn[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.height = "auto";
      readBtn[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.height = "auto";
      //readBtn[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.height = "auto";
      //readBtn[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.height = "auto";
    })
  }

  let pageBtn = document.querySelectorAll(".swiper7-pagination");
  for (let i = 0; i < pageBtn.length; i++) {
    let pags = pageBtn[i].querySelectorAll("span");
    for (let i = 0; i < pags.length; i++) {
      pags[i].addEventListener("click", () => {
        
        let slidesAuto = pags[i].parentElement.parentElement.nextElementSibling.querySelectorAll(".swiper7-slide");
        let heightAuto = slidesAuto[i].clientHeight + 371;
        //alert(pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.outerHTML);
        pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.transitionDuration = "300ms";
        //pags[i].parentElement.parentElement.parentElement.parentElement.style.transitionDuration = "0ms";
        pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.height = heightAuto + "px";
        pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.backfaceVisibility = "hidden";

        //pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.transitionDuration = "200ms";
        //pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.transitionDuration = "0ms";
        //pags[i].parentElement.parentElement.parentElement.parentElement.parentElement.style.transitionDelay = "0ms";
       })
  }}
  
  /*for (let i = 0; i < pageBtn.length; i++) {
    pageBtn[i].addEventListener("click", () => {
      //alert(pageBtn[i].parentElement.parentElement.parentElement.parentElement.outerHTML)
      //pageBtn[i].parentElement.nextElementSibling.style.height = "auto";
      pageBtn[i].parentElement.parentElement.parentElement.style.height = "auto";
      let pags = pageBtn.querySelectorAll(span);
      for (let i = 0; i < pags.length; i++) {
        pags[i].addEventListener("click", () => {

         })

      //pageBtn[i].parentElement.parentElement.parentElement.parentElement.style.height = "auto";
      /*let slidesAuto = pageBtn[i].parentElement.nextElementSibling.querySelectorAll(".swiper7-slide");
      for (let g = 0; g < slidesAuto.length; g++) {
        slidesAuto[g].style.height = "auto";
      }
    })
  }*/

    

    function setTranslate(yPos, el) {
      el.style.transform = "translate3d(0, " + yPos + "px, 0)";
  }
  
  let imageCont1 = document.querySelector("#image1");
  let imageCont2 = document.querySelector("#image2");
  let imageCont3 = document.querySelector("#image3");
  let imageCont4 = document.querySelector("#image4");
  let imageCont5 = document.querySelector("#image5");
  let imageCont6 = document.querySelector("#image6");
  let imageCont7 = document.querySelector("#image7");
  let imageCont8 = document.querySelector("#image8");
  let imageCont9 = document.querySelector("#image9");

  let wrap1 = document.querySelector("#image1wrap");
  let wrap2 = document.querySelector("#image2wrap");
  let wrap3 = document.querySelector(".image3wrap");

  let yScrollPosition;

  
  
  function scrollLoop() {
    yScrollPosition = window.scrollY;
    let wrap1Pos = wrap1.getBoundingClientRect();
    let wrap2Pos = wrap2.getBoundingClientRect();
    let wrap3Pos = wrap3.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    if (wrap1Pos.top < windowHeight) {
      setTranslate(wrap1Pos.top * 0.3, imageCont1);
      imageCont1.children[0].style.display = "block";
      setTranslate(wrap1Pos.top * 0.3, imageCont2);
      imageCont2.children[0].style.display = "block";
      setTranslate(wrap1Pos.top * 0.3, imageCont3);
      imageCont3.children[0].style.display = "block";
    }

    if (wrap2Pos.top < windowHeight) {
      setTranslate(wrap2Pos.top * 0.3, imageCont4);
      imageCont4.children[0].style.display = "block";
      setTranslate(wrap2Pos.top * 0.3, imageCont5);
      imageCont5.children[0].style.display = "block";
      setTranslate(wrap2Pos.top * 0.3, imageCont6);
      imageCont6.children[0].style.display = "block";
    }

    if (wrap3Pos.top < windowHeight) {
      setTranslate(wrap3Pos.top * 0.3, imageCont7);
      imageCont7.children[0].style.display = "block";
      setTranslate(wrap3Pos.top * 0.3, imageCont8);
      imageCont8.children[0].style.display = "block";
      setTranslate(wrap3Pos.top * 0.3, imageCont9);
      imageCont9.children[0].style.display = "block";
    }
    
    window.requestAnimationFrame(scrollLoop);
  }
  
  //window.addEventListener("scroll", scrollLoop);

  window.addEventListener("scroll", scrollLoop);
  