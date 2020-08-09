/* BURGER-MENU FOR 375 px*/
let burger = document.querySelector('.burger');
let mobileMenu = document.querySelector('.mobile-navigation');
var mobileNavigation = document.querySelector('.mobile-navigation');
var middleLine = document.querySelector(".middle-line");
var topLine = document.querySelector(".top-line");
var bottomLine = document.querySelector(".bottom-line");

burger.addEventListener('click', function (event) {
    event.preventDefault();
    mobileMenu.classList.toggle("show-mobile");
    middleLine.classList.toggle("cross-middle");
    topLine.classList.toggle("cross-top");
    bottomLine.classList.toggle("cross-bottom");
})

//HEADER, MENU

let navigationLinks = document.querySelectorAll('.navigation__link a');
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        navigationLinks.forEach((el) => {
            el.classList.remove('colored')
        });
        navigationLinks[i].classList.add('colored');
        var sectionId = navigationLinks[i].getAttribute('href');
        document.querySelector('' + sectionId).scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
        mobileNavigation.classList.toggle("show-mobile");
        middleLine.classList.toggle("cross-middle");
        topLine.classList.toggle("cross-top");
        bottomLine.classList.toggle("cross-bottom");
    })
}

/*SLIDER*/

let slider = document.querySelector(".slider");
let sliderButtons = document.querySelectorAll('.slider__arrow');
let slides = document.querySelectorAll('.slider__picture');
for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener('click', function () {
        slides[0].classList.toggle('slider-show');
        slides[1].classList.toggle('slider-show');
        slider.classList.toggle('blue-slider');
    })
}

/* TURN SCREENS OFF */
/*var verticalScreen = document.querySelector('.vertical');
var blackVertical = document.querySelector('.vertical-black-screen');
verticalScreen.addEventListener('click', function () {
    blackVertical.classList.toggle('make-visible');
})

var horizontalScreen = document.querySelector('.horizontal');
var blackHorizontal = document.querySelector('.horizontal-black-screen');
horizontalScreen.addEventListener('click', function () {
    blackHorizontal.classList.toggle('make-visible');
})

/*PORTFOLIO tabs*/

let portfolioLayout = document.querySelector('.portfolio__layout');
let categories = document.querySelectorAll('.portfolio__tab');
let portfolioImages = document.getElementsByClassName('portfolio__image');

/* TABS */

for (let j = 0; j < categories.length; j++) {
    categories[j].addEventListener('click', function (event) {
        event.preventDefault();
        categories.forEach((el) => {
            el.classList.remove('tab-active');
        })
        categories[j].classList.add('tab-active');

        /* MIX */
        for (let c = 0; c <= portfolioImages.length; c++) {
            portfolioLayout.insertBefore(portfolioImages[Math.floor(Math.random() * portfolioImages.length)], portfolioImages[-1]);
        }

    })
}

/*PORTFOLIO images borders*/

for (let z = 0; z < portfolioImages.length; z++) {
    portfolioImages[z].addEventListener('click', function (event) {
        event.preventDefault();
        for (let b = 0; b < portfolioImages.length; b++) {
            portfolioImages[b].style.outline = 'none';
        }
        event.target.style.outline = '5px solid #F06C64';
    })
}

/* FORM AND POPUP */

let form = document.querySelector('.form');
var popup = document.querySelector('.popup');
var popupButton = document.querySelector('.popup-button');
var popupLines = document.querySelectorAll('.popup-line');
var subject = document.querySelector('#subject');
var describe = document.querySelector('#describe');
var submitButton = document.querySelector('.submit__button');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(subject.value);
    console.log(describe.value);
    if (subject.value !== '') {
        popupLines[1].innerHTML = 'Тема: ' + subject.value;
    }
    if (describe.value !== '') {
        popupLines[2].innerHTML = 'Описание: ' + describe.value;
    }
    popup.classList.add('make-visible');
});
popupButton.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('make-visible');
    form.reset();
})