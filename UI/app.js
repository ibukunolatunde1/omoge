let hamburger = document.querySelector('.hamburger');
let backdrop = document.querySelector('.backdrop');
let mobileNav = document.querySelector('.mobile-nav');

let toggleHamburger = () => {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
}

let closeMobileNav = () => {
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
}

hamburger.addEventListener('click', toggleHamburger);
backdrop.addEventListener('click', closeMobileNav);