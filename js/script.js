// Membuat Icon menu berfungsi di responsive
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// ScroolReveal animasi slise dari kiri di logo ambil dari github website scroolreveal
const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.home-text span',{delay:600, origin:'top'});
sr.reveal('.home-text h1',{delay:680, origin:'left'});
sr.reveal('.home-text p',{delay:750, origin:'right'});
sr.reveal('.main-btn',{delay:860, origin:'left'});
sr.reveal('.share',{delay:950, origin:'bottom'});
sr.reveal('.home-img',{delay:1000, origin:'right'});

// About
sr.reveal('.about-text h2',{delay:750, origin:'right'});
sr.reveal('.about-text p',{delay:750, origin:'right'});
sr.reveal('.about-img',{delay:1000, origin:'left'});

// Capability
sr.reveal('.capability h2',{delay:600, origin:'top'});
sr.reveal('.capability p',{delay:600, origin:'bottom'});
sr.reveal('.capability-content',{delay:600, origin:'bottom'});

// Portofolio
sr.reveal('.portofolio h2',{delay:600, origin:'top'});
sr.reveal('.portofolio h5',{delay:600, origin:'bottom'});
sr.reveal('.portofolio p',{delay:600, origin:'bottom'});

// Scrool Navbar tetap
const header = document.querySelector("header");

window.addEventListener ("scroll",function() {
    header.classList.toggle ("sticky",window.scrollY > 0);
});
