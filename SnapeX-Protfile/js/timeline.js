document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    const timelineLine = document.querySelector('.timeline-line');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const progressBar = document.querySelector('.timeline-progress');
    let isMobile = window.innerWidth <= 768;
    let activeItem = null;
    
    // Set initial state
    timelineItems[0].classList.add('visible');
    
    // Handle window resize
    function handleResize() {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;
        
        // Reset active states when switching between mobile and desktop
        if (wasMobile !== isMobile) {
            timelineItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    }
    
    window.addEventListener('resize', handleResize);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (!isMobile) {
                    updateProgress();
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Handle mobile item click
    function handleItemClick(item) {
        if (!isMobile) return;
        
        // If clicking the active item, close it
        if (item === activeItem) {
            item.classList.remove('active');
            activeItem = null;
            return;
        }
        
        // Close previous active item
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        
        // Open clicked item
        item.classList.add('active');
        activeItem = item;
        
        // Scroll to center the active item
        setTimeout(() => {
            item.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 10);
    }
    
    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
        
        // Make items clickable on mobile
        if (isMobile) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => handleItemClick(item));
            
            // Add touch feedback
            item.addEventListener('touchstart', () => {
                item.style.transition = 'none';
                item.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            item.addEventListener('touchend', () => {
                item.style.transition = 'transform 0.2s ease';
                item.style.transform = 'scale(1)';
            }, { passive: true });
        }
    });
    
    // Update progress bar
    function updateProgress() {
        if (isMobile) return; // Skip progress bar on mobile for better performance
        
        const visibleItems = document.querySelectorAll('.timeline-item.visible');
        const progress = (visibleItems.length / timelineItems.length) * 100;
        progressBar.style.height = `${progress}%`;
        
        // Add pulse animation to the last visible dot
        timelineItems.forEach((item, index) => {
            const dot = item.querySelector('.timeline-dot');
            if (index < visibleItems.length) {
                dot.style.transform = 'scale(1.1)';
                dot.style.boxShadow = '0 0 0 6px rgba(79, 70, 229, 0.3)';
                setTimeout(() => {
                    dot.style.transform = 'scale(1)';
                    dot.style.boxShadow = '0 0 0 4px rgba(79, 70, 229, 0.2)';
                }, 300);
            }
        });
    }
    
    // Add hover effects for desktop
    if (!isMobile) {
        timelineItems.forEach(item => {
            const dot = item.querySelector('.timeline-dot');
            const content = item.querySelector('.timeline-content');
            
            item.addEventListener('mouseenter', () => {
                dot.style.transform = 'scale(1.3)';
                dot.style.boxShadow = '0 0 0 8px rgba(79, 70, 229, 0.2)';
                content.style.transform = 'translateX(-5px)';
                content.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
            });
            
            item.addEventListener('mouseleave', () => {
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = '0 0 0 4px rgba(79, 70, 229, 0.2)';
                content.style.transform = 'translateX(0)';
                content.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            });
        });
    }
});
