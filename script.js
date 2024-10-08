document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navClose = document.querySelector('.nav-close');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    navClose.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});