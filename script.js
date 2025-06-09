// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('active');
}

// Testimonial Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dots .dot');

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Auto-advance slider
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 7000); // Change slide every 7 seconds

// Initial display for slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

// FAQ Accordion
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');

    // Close all other open answers
    document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
        if (openAnswer !== answer) {
            openAnswer.classList.remove('open');
            openAnswer.previousElementSibling.classList.remove('active');
            openAnswer.previousElementSibling.querySelector('i').classList.remove('active');
        }
    });

    // Toggle current answer
    answer.classList.toggle('open');
    element.classList.toggle('active');
    icon.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        const nav = document.querySelector('.main-nav');
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});