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
