        // Hero Slider
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Form submission to WhatsApp
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const inquiryType = document.getElementById('inquiry-type').value;
            const message = document.getElementById('message').value;
            
            const whatsappMessage = `Hello MegaCare Pharmacy,%0A%0AMy name is ${name}.%0APhone: ${phone}%0AInquiry Type: ${inquiryType}%0A%0AMessage:%0A${message}`;
            
            window.open(`https://wa.me/234YOURPHONENUMBER?text=${whatsappMessage}`, '_blank');
        });
        
        // Initialize first slide
        showSlide(0);

            // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navList.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Brands Slider Auto-scroll
function autoScrollBrands() {
    const slider = document.querySelector('.brands-slider');
    if (slider) {
        let scrollAmount = 0;
        const slideWidth = 180; // Adjust based on your slide width
        const slideCount = document.querySelectorAll('.brand-slide').length;
        
        setInterval(() => {
            scrollAmount = (scrollAmount + slideWidth) % (slideWidth * slideCount);
            slider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 3000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    autoScrollBrands();
});

         // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });