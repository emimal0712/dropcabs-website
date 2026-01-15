// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(18, 18, 18, 0.95)';
        nav.style.padding = '15px 8%';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(0,0,0,0.5)';
        nav.style.padding = '20px 8%';
        nav.style.boxShadow = 'none';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Basic Form Submit Handler
document.getElementById('cabForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your inquiry! Our team will contact you shortly with the estimate.");
});
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    if(this.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Redirecting to Booking System...');
        // You can replace the alert with a window.location = "booking.html";
    }
});
