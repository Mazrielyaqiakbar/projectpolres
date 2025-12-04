document.addEventListener('DOMContentLoaded', function() {
    const statusForm = document.getElementById('statusForm');
    const statusResult = document.getElementById('statusResult');
    
    // Cyberpunk form submission
    statusForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchInput = document.getElementById('searchInput').value.trim();
        
        if (!searchInput) {
            showToast('Please enter NIK or Registration Number', 'warning');
            return;
        }
        
        // Cyberpunk loading state
        const submitBtn = statusForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="cyber-loader"></span> Scanning...';
        submitBtn.disabled = true;
        
        // Add cyberpunk scanning effect
        searchInput.style.animation = 'cyberScan 2s ease-in-out';
        
        // Simulate API call with cyberpunk effects
        setTimeout(() => {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            searchInput.style.animation = '';
            
            // Show status result with cyberpunk animation
            statusResult.style.display = 'block';
            statusResult.style.opacity = '0';
            statusResult.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                statusResult.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                statusResult.style.opacity = '1';
                statusResult.style.transform = 'translateY(0)';
                
                // Add cyberpunk glow effect to status card
                const statusCard = statusResult.querySelector('.status-card');
                statusCard.style.boxShadow = '0 0 50px rgba(0, 212, 255, 0.5)';
                
                // Scroll to result with cyberpunk smooth scroll
                statusResult.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 10);
            
            // Show success message
            showToast('Application status found', 'success');
        }, 2000);
    });
    
    // Cyberpunk toast notification function
    function showToast(message, type = 'info') {
        // Create toast element if it doesn't exist
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        // Set toast content and type with cyberpunk effects
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-icon">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            </div>
            <div>${message}</div>
            <div class="toast-close">
                <i class="fas fa-times"></i>
            </div>
        `;
        
        // Add cyberpunk glow effect
        if (type === 'success') {
            toast.style.boxShadow = '0 0 30px rgba(255, 170, 0, 0.5)';
        } else if (type === 'error') {
            toast.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.5)';
        }
        
        // Show toast with cyberpunk animation
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
            toast.style.animation = 'cyberSlideIn 0.5s ease';
        }, 10);
        
        // Hide toast after delay
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 5000);
        
        // Close button functionality
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
    }
});

// Add cyberpunk animations
const style = document.createElement('style');
style.textContent = `
    @keyframes cyberScan {
        0%, 100% {
            box-shadow: 0 0 5px var(--primary);
        }
        50% {
            box-shadow: 0 0 20px var(--primary), 0 0 40px var(--primary);
        }
    }
    
    @keyframes cyberSlideIn {
        from {
            transform: translateY(100px);
            opacity: 0;
            filter: blur(10px);
        }
        to {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
        }
    }
    
    .cyber-loader {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: var(--primary);
        animation: cyberSpin 1s ease-in-out infinite;
    }
    
    @keyframes cyberSpin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);