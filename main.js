// var tl = gsap.timeline() 

// tl.from("#loader h3",{
//     x:40,
//     opacity:0,
//     duration:1,
//     stagger:0.1
// })
// tl.to("#loader h3",{
//     opacity:0,
//     x:-10,
//     duration:1,
//     stagger:0.1
// })
// tl.to("#loader",{
//     opacity:0
// })
// tl.to("#loader",{
//     display:"none"
// })
var tl = gsap.timeline();

// Function to set the display property of an element and make it visible
function showElement(elementSelector) {
    gsap.set(elementSelector, { display: "block", opacity: 1, x: 0 });
}

// First h3 appears at the center
tl.to("#loader h3:first-child", {
    onStart: function () {
        showElement("#loader h3:first-child");
    },
    opacity: 0,
    x: -20,
    duration: 0.7,
    ease: "power2.inOut",
    stagger:0.1
    
});
tl.to("#loader h3:first-child", {
    display:"none"
})
// Second h3 appears at the center
tl.to("#loader h3:nth-child(2)", {
    onStart: function () {
        showElement("#loader h3:nth-child(2)");
    },
    opacity: 0,
    x: -20,
    duration: 0.7,
    ease: "power2.inOut",
    stagger:0.1
});
tl.to("#loader h3:nth-child(2)", {
    display:"none"
})
// Third h3 appears at the center
tl.to("#loader h3:last-child", {
    onStart: function () {
        showElement("#loader h3:last-child");
    },
    opacity: 0,
    x: -20,
    duration: 0.7,
    ease: "power2.inOut",
    stagger:0.1
});
tl.to("#loader h3:last-child", {
    display:"none"
})
// Fade out and hide the loader
tl.to("#loader", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5
});

tl.to("#loader", {
    display: "none",
    duration: 0
});


const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu_link');
const iconClose = document.querySelector('.close_icon');


iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// CHANGE BACKGROUND HEADER 
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
};

window.addEventListener('scroll', scrollHeader);

// HERO TYPE EFFECT 
const typed = document.querySelector('.typed');

if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        let sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}


window.addEventListener('scroll', scrollActive);


// Resume scroll 
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {

        const sectionHeight = page.offsetHeight;

        const sectionTop = page.offsetTop - 150;

        let sectionId = page.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume_tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}

window.addEventListener('scroll', resumeActive)

// PORTFOLIO 
let filterItems = document.querySelectorAll('.portfolio_filters li');

function activePortfolio() {
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active');
    })
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortfolio)
})

// mixitup filter portfolio 
let mixerPortfolio = mixitup('.portfolio_wrap-container', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 300
    }
})

// testimonial swiper 
let swiper = new Swiper(".testimonial_container", {
    effect: 'slide',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
});


// SERVICES 
let modalBtns = document.querySelectorAll('.services_button'),
    modalViews = document.querySelectorAll(".services_modal"),
    modalClose = document.querySelectorAll('.modal_close-icon');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach(el => {
    el.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})