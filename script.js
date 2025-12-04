document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with cyberpunk settings
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 120,
        delay: 150
    });

    // Cyberpunk preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.transition = 'all 0.5s ease';
                preloader.style.opacity = '0';
                preloader.style.filter = 'blur(10px)';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // Dynamic navbar with cyber effects
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    let scrollTimeout;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Throttle scroll events for performance
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                if (currentScroll <= 0) {
                    navbar.style.background = 'var(--glass)';
                    navbar.style.backdropFilter = 'blur(20px)';
                    navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                } else {
                    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                    navbar.style.backdropFilter = 'blur(20px)';
                    navbar.style.boxShadow = '0 5px 20px rgba(0, 212, 255, 0.1)';
                }
                
                lastScroll = currentScroll;
                scrollTimeout = null;
            }, 10);
        }
    });

    // Cyberpunk back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
            backToTop.style.transform = 'translateY(0) scale(1)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
            backToTop.style.transform = 'translateY(20px) scale(0.8)';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Cyberpunk WhatsApp FAB
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', function() {
            window.open('https://wa.me/6281234567890?text=Hello%20I%20want%20to%20know%20more%20about%20POLRES.DIGITAL', '_blank');
        });

        // Add pulse animation to FAB
        setInterval(() => {
            fab.style.transform = 'scale(1.1)';
            setTimeout(() => {
                fab.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }

    // Smooth scrolling with cyberpunk offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Cyberpunk parallax effects
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Cyberpunk hover effects for cards
    const cards = document.querySelectorAll('.card, .service-card, .feature-card, .testimonial-card, .info-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
            this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        });
    });

    // Cyberpunk text animation
    const cyberText = document.querySelectorAll('.cyber-text');
    
    cyberText.forEach(text => {
        const originalText = text.textContent;
        text.textContent = '';
        
        // Type writer effect
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                text.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(text);
    });

    // Cyberpunk glitch effect
    const glitchElements = document.querySelectorAll('.glitch-effect');
    
    glitchElements.forEach(element => {
        setInterval(() => {
            element.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0px var(--primary),
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0px var(--secondary)
            `;
            
            setTimeout(() => {
                element.style.textShadow = 'none';
            }, 100);
        }, 3000);
    });

    // Cyberpunk loading animation for buttons
    const cyberButtons = document.querySelectorAll('.btn-cyber, .btn-primary-cyber, .btn-outline-cyber');
    
    cyberButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Create loading overlay
            const overlay = document.createElement('span');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '-100%';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)';
            overlay.style.transition = 'left 0.5s';
            
            this.appendChild(overlay);
            
            // Animate overlay
            setTimeout(() => {
                overlay.style.left = '100%';
            }, 10);
            
            // Remove overlay after animation
            setTimeout(() => {
                overlay.remove();
            }, 500);
        });
    });
});