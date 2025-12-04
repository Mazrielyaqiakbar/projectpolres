document.addEventListener('DOMContentLoaded', function() {
    const formSteps = document.querySelectorAll('.form-step');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressFill = document.querySelector('.progress-fill');
    const steps = document.querySelectorAll('.step');
    
    let currentStep = 0;
    
    // Initialize form
    updateFormStep();
    
    // Cyberpunk form navigation
    nextBtn.addEventListener('click', function() {
        if (validateCurrentStep()) {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                updateFormStep();
                
                // Cyberpunk transition effect
                formSteps[currentStep].style.animation = 'none';
                setTimeout(() => {
                    formSteps[currentStep].style.animation = 'cyberFadeIn 0.5s ease';
                }, 10);
            }
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            updateFormStep();
            
            // Cyberpunk transition effect
            formSteps[currentStep].style.animation = 'none';
            setTimeout(() => {
                formSteps[currentStep].style.animation = 'cyberFadeIn 0.5s ease';
            }, 10);
        }
    });
    
    // Cyberpunk form submission
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateCurrentStep()) {
            // Cyberpunk loading state
            submitBtn.innerHTML = '<span class="cyber-loader"></span> Processing...';
            submitBtn.disabled = true;
            
            // Simulate form submission with cyberpunk effects
            setTimeout(() => {
                // Reset button state
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Submit';
                submitBtn.disabled = false;
                
                // Show success message
                showToast('Registration submitted successfully!', 'success');
                
                // Reset form
                this.reset();
                currentStep = 0;
                updateFormStep();
                
                // Redirect after delay
                setTimeout(() => {
                    window.location.href = 'status.html';
                }, 2000);
            }, 2000);
        }
    });
    
    function updateFormStep() {
        // Update form steps visibility with cyberpunk effects
        formSteps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
            
            if (index === currentStep) {
                step.style.opacity = '0';
                step.style.transform = 'translateX(30px)';
                
                setTimeout(() => {
                    step.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    step.style.opacity = '1';
                    step.style.transform = 'translateX(0)';
                }, 10);
            } else {
                step.style.display = 'none';
            }
        });
        
        // Update step indicators with cyberpunk glow
        steps.forEach((step, index) => {
            const stepNumber = step.querySelector('.step-number');
            
            if (index < currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
                stepNumber.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.5)';
            } else if (index === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
                stepNumber.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.8)';
            } else {
                step.classList.remove('active', 'completed');
                stepNumber.style.boxShadow = 'none';
            }
        });
        
        // Update progress bar with cyberpunk animation
        const progressWidth = (currentStep / (formSteps.length - 1)) * 100;
        progressFill.style.transition = 'width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        progressFill.style.width = `${progressWidth}%`;
        progressFill.style.boxShadow = `0 0 20px rgba(0, 212, 255, 0.8)`;
        
        // Update buttons
        prevBtn.style.display = currentStep === 0 ? 'none' : 'inline-block';
        nextBtn.style.display = currentStep === formSteps.length - 1 ? 'none' : 'inline-block';
        submitBtn.style.display = currentStep === formSteps.length - 1 ? 'inline-block' : 'none';
        
        // Update review data if on last step
        if (currentStep === formSteps.length - 1) {
            updateReviewData();
        }
    }
    
    function validateCurrentStep() {
        const currentStepElement = formSteps[currentStep];
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('is-invalid');
                field.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.5)';
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                field.style.boxShadow = 'none';
            }
        });
        
        if (!isValid) {
            showToast('Please complete all required fields', 'error');
        }
        
        return isValid;
    }
    
    function updateReviewData() {
        // Get form data
        const formData = new FormData(document.getElementById('registrationForm'));
        
        // Update review table with cyberpunk effects
        const reviewFields = ['reviewName', 'reviewNik', 'reviewBirthDate', 'reviewAddress', 'reviewPhone', 'reviewEmail'];
        
        reviewFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.style.animation = 'cyberGlow 1s ease infinite';
                field.textContent = formData.get(fieldId.replace('review', '').toLowerCase()) || '-';
            }
        });
        
        // Get occupation text
        const occupationSelect = document.getElementById('occupation');
        const occupationText = occupationSelect.options[occupationSelect.selectedIndex].text;
        const reviewOccupation = document.getElementById('reviewOccupation');
        if (reviewOccupation) {
            reviewOccupation.style.animation = 'cyberGlow 1s ease infinite';
            reviewOccupation.textContent = occupationText || '-';
        }
    }
    
    // Cyberpunk file upload handlers
    const fileUploads = document.querySelectorAll('.file-upload');
    
    fileUploads.forEach(upload => {
        const input = upload.querySelector('input[type="file"]');
        const preview = upload.nextElementSibling;
        
        upload.addEventListener('click', () => input.click());
        
        upload.addEventListener('dragover', (e) => {
            e.preventDefault();
            upload.classList.add('dragover');
            upload.style.borderColor = 'var(--neon)';
            upload.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.5)';
        });
        
        upload.addEventListener('dragleave', () => {
            upload.classList.remove('dragover');
            upload.style.borderColor = '';
            upload.style.boxShadow = '';
        });
        
        upload.addEventListener('drop', (e) => {
            e.preventDefault();
            upload.classList.remove('dragover');
            upload.style.borderColor = '';
            upload.style.boxShadow = '';
            
            if (e.dataTransfer.files.length) {
                input.files = e.dataTransfer.files;
                handleFileSelect(input, preview);
            }
        });
        
        input.addEventListener('change', () => {
            handleFileSelect(input, preview);
        });
    });
    
    function handleFileSelect(input, preview) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                preview.innerHTML = `
                    <div class="file-item">
                        <img src="${e.target.result}" alt="Preview">
                        <div class="file-remove"><i class="fas fa-times"></i></div>
                    </div>
                `;
                
                // Cyberpunk file preview animation
                const fileItem = preview.querySelector('.file-item');
                fileItem.style.animation = 'cyberZoomIn 0.5s ease';
                
                // Add remove functionality
                preview.querySelector('.file-remove').addEventListener('click', () => {
                    input.value = '';
                    preview.innerHTML = '';
                });
            };
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
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
    @keyframes cyberFadeIn {
        from {
            opacity: 0;
            transform: translateX(30px);
            filter: blur(10px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
        }
    }
    
    @keyframes cyberGlow {
        0%, 100% {
            text-shadow: 0 0 5px var(--neon);
        }
        50% {
            text-shadow: 0 0 20px var(--neon), 0 0 30px var(--neon);
        }
    }
    
    @keyframes cyberZoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(5px);
        }
        to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
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