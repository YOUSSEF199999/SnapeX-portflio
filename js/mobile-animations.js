// Handle mobile animations for services and about checklist
function initMobileAnimations() {
    // Helper: initialize a group with stagger
    const initGroup = (elements, baseDelay = 0, perItemDelay = 100, translate = 48, scale = 0.95) => {
        if (!elements || !elements.length) return null;
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = `translateY(${translate}px) scale(${scale})`;
            el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            el.style.transitionDelay = `${baseDelay + index * perItemDelay}ms`;
            el.style.willChange = 'transform, opacity';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.opacity = '1';
                    target.style.transform = 'translateY(0) scale(1)';
                    // animate once
                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '-50px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
        return observer;
    };

    const serviceCards = document.querySelectorAll('.service-card');
    const aboutItems = document.querySelectorAll('.about-item');

    const serviceObserver = initGroup(serviceCards, 0, 100, 48, 0.95);
    const aboutObserver = initGroup(aboutItems, 0, 80, 24, 0.98);

    return () => {
        serviceCards.forEach(card => serviceObserver?.unobserve(card));
        aboutItems.forEach(item => aboutObserver?.unobserve(item));
    };
}

// Initialize animations when DOM is loaded
function initializeAnimations() {
    // Initialize immediately
    initMobileAnimations();
    
    // Re-initialize after a short delay to ensure everything is rendered
    setTimeout(initMobileAnimations, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeAnimations);

// Re-run when language changes or window is resized
function handleResize() {
    initMobileAnimations();
}

// Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 250);
});

document.addEventListener('languageChanged', initializeAnimations);

// Export for manual initialization if needed
window.initMobileAnimations = initMobileAnimations;
