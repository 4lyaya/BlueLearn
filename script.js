// Preloader
window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('fade-out');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// DOM Elements
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');
const searchBtn = document.querySelector('#search-btn');
const searchForm = document.querySelector('.search-form');
const loginBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const registerLink = document.querySelector('#register-link');
const loginLink = document.querySelector('#login-link');
const themeBtn = document.querySelector('#theme-btn');
const backToTopBtn = document.querySelector('#back-to-top');

// Toggle Menu
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
}

// Toggle Search Form
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
}

// Toggle Login Form
loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    registerForm.classList.remove('active');
}

// Switch between Login and Register Forms
registerLink.onclick = (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.toggle('active');
}

loginLink.onclick = (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.toggle('active');
}

// Close All When Scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');

    // Back to Top Button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }

    // Header Shadow on Scroll
    if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('scrolled');
    } else {
        document.querySelector('.header').classList.remove('scrolled');
    }
}

// Back to Top Button
backToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dark/Light Theme Toggle
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeBtn.classList.add('fa-sun');
}

// Course Filtering
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-buttons .btn');
    const courseItems = document.querySelectorAll('.courses .box-container .box');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            courseItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});

// Initialize Swiper Testimonials
const swiper = new Swiper('.testimonials-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});

// Initialize AOS Animation
AOS.init({
    duration: 800,
    delay: 100,
    once: true
});

// Form Submission
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('.box').value;
    alert(`Login functionality would be implemented here for ${email}`);
    this.reset();
    this.classList.remove('active');
});

document.querySelector('.register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelectorAll('.box')[1].value;
    alert(`Registration functionality would be implemented here for ${email}`);
    this.reset();
    this.classList.remove('active');
});

document.querySelector('.newsletter .content form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('.box').value;
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
});