const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
}); 

menuCloseButton.addEventListener("click", () => {
    menuOpenButton.click();
});

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

const swiper = new Swiper(".slider-wrapper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 25, 

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

const coverBox = document.querySelector('.cover-box');
const loginBtn = document.querySelector('.btnlogin-popup');
const closeBtn = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

loginBtn.onclick = () => {
    coverBox.classList.add('active-popup');
};

closeBtn.onclick = () => {
    coverBox.classList.remove('active-popup');
    coverBox.classList.remove('active');
};

registerLink.onclick = (e) => {
    e.preventDefault();
    coverBox.classList.add('active');
};

loginLink.onclick = (e) => {
    e.preventDefault();
    coverBox.classList.remove('active');
};
