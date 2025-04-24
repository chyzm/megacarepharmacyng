document.addEventListener('DOMContentLoaded', () => {
    // Hero Slider
    let currentSlide = 0;
    const heroSlides = document.querySelectorAll('.slide');
  
    function showHeroSlide(n) {
      heroSlides.forEach(slide => slide.classList.remove('active'));
      currentSlide = (n + heroSlides.length) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }
  
    function nextHeroSlide() {
      showHeroSlide(currentSlide + 1);
    }
  
    setInterval(nextHeroSlide, 5000);
    showHeroSlide(0);
  
    // WhatsApp Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const inquiryType = document.getElementById('inquiry-type').value;
        const message = document.getElementById('message').value;
  
        const whatsappMessage = `Hello MegaCare Pharmacy,%0A%0AMy name is ${name}.%0APhone: ${phone}%0AInquiry Type: ${inquiryType}%0A%0AMessage:%0A${message}`;
  
        window.open(`https://wa.me/2347031016787?text=${whatsappMessage}`, '_blank');
      });
    }
  
    // Mobile Navigation Menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');
   // const dropdownToggles = document.querySelectorAll('.dropdown > a, .sub-dropdown > a');
   const dropdownToggles = document.querySelectorAll('.nav-list li > a');
    mobileMenu.addEventListener('click', function () {
      this.classList.toggle('active');
      navList.classList.toggle('active');
      document.body.classList.toggle('no-scroll', navList.classList.contains('active'));
    });
    

   // Update the dropdown toggle event listener in script.js
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            const parent = this.parentElement;
            const isDropdown = parent.classList.contains('dropdown') || parent.classList.contains('sub-dropdown');
            
            if (isDropdown) {
                e.preventDefault();
                const isActive = parent.classList.contains('active');
                
                // Close all dropdowns at the same level
                if (parent.parentElement) {
                    Array.from(parent.parentElement.children).forEach(sibling => {
                        if (sibling !== parent) {
                            sibling.classList.remove('active');
                        }
                    });
                }
                
                // Toggle current dropdown
                parent.classList.toggle('active', !isActive);
                
                // Scroll the dropdown into view if it's being opened
                if (!isActive) {
                    setTimeout(() => {
                        parent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            }
        }
    });
});
  
    // Brands Auto Scroll
    function autoScrollBrands() {
      const slider = document.querySelector('.brands-slider');
      if (slider) {
        let scrollAmount = 0;
        const slideWidth = 180;
        const slideCount = document.querySelectorAll('.brand-slide').length;
  
        setInterval(() => {
          scrollAmount = (scrollAmount + slideWidth) % (slideWidth * slideCount);
          slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }, 3000);
      }
    }
  
    autoScrollBrands();
  
    // Back to Top
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.add('active');
        } else {
          backToTopButton.classList.remove('active');
        }
      });
  
      backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Client Reviews Slider
    const reviewSlides = document.querySelectorAll('.review-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let reviewSlideIndex = 0;
  
    function showReviewSlide(index) {
      reviewSlides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
  
      reviewSlides[index].classList.add('active');
      dots[index].classList.add('active');
    }
  
    if (reviewSlides.length && dots.length) {
      showReviewSlide(reviewSlideIndex);
  
      nextBtn?.addEventListener('click', () => {
        reviewSlideIndex = (reviewSlideIndex + 1) % reviewSlides.length;
        showReviewSlide(reviewSlideIndex);
      });
  
      prevBtn?.addEventListener('click', () => {
        reviewSlideIndex = (reviewSlideIndex - 1 + reviewSlides.length) % reviewSlides.length;
        showReviewSlide(reviewSlideIndex);
      });
  
      dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
          reviewSlideIndex = i;
          showReviewSlide(reviewSlideIndex);
        });
      });
  
      setInterval(() => {
        reviewSlideIndex = (reviewSlideIndex + 1) % reviewSlides.length;
        showReviewSlide(reviewSlideIndex);
      }, 5000);
    }
  });
  