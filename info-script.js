document.addEventListener('DOMContentLoaded', function() {
    // Cyberpunk FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const icon = question.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items with cyberpunk animation
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
                
                // Add cyberpunk glow effect
                item.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
                
                // Smooth scroll to opened item
                setTimeout(() => {
                    item.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest',
                        inline: 'nearest'
                    });
                }, 300);
            } else {
                item.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
                item.style.boxShadow = '';
            }
        });
    });
    
    // Cyberpunk hover effects for cards
    const cards = document.querySelectorAll('.service-card, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
            this.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.4)';
            
            // Add cyberpunk glow effect
            const icon = this.querySelector('.service-icon, .contact-icon');
            if (icon) {
                icon.style.animation = 'cyberPulse 1s ease infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
            
            // Remove cyberpunk glow effect
            const icon = this.querySelector('.service-icon, .contact-icon');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
});

// Add cyberpunk animations
const style = document.createElement('style');
style.textContent = `
    @keyframes cyberPulse {
        0%, 100% {
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }
        50% {
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.8);
        }
    }
`;
document.head.appendChild(style);