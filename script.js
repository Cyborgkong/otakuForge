// Mobile Menu Toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('show');
});

// Cart Counter Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCountElement = document.querySelector('.cart-count');
let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animation effect on button click
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Testimonials Slider
const testimonialSlider = document.getElementById('testimonialsSlider');
const testimonialCards = testimonialSlider.querySelectorAll('.testimonial-card');
const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    testimonialSlider.scrollTo({
        left: testimonialCards[index].offsetLeft,
        behavior: 'smooth'
    });
    
    // Update active dot
    sliderDots.forEach(dot => dot.classList.remove('active'));
    sliderDots[index].classList.add('active');
    
    currentSlide = index;
}

// Dot navigation
sliderDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        showSlide(slideIndex);
    });
});

// Auto-rotate slides
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
}, 5000);

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('.newsletter-input');
    if (emailInput.value) {
        alert('Thanks for subscribing! You\'ll receive our updates soon.');
        emailInput.value = '';
    }
});

// Product hover effects
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 25px rgba(106, 90, 205, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});