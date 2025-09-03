// Typing Animation for About Section
const aboutTexts = {
    ar: 'في SnapeX بنساعد أصحاب الكافيهات والمطاعم إنهم يقدّموا تجربة مميزة وعصرية لعملائهم من خلال مواقع إلكترونية تفاعلية بدل المينو التقليدي. هدفنا إن العميل يدخل يختار، يتصفح، ويستمتع بتجربة سهلة وسريعة – وأنت كصاحب المكان تتحكم في كل التفاصيل بنفسك من لوحة تحكم بسيطة.',
    en: 'At SnapeX, we help cafe and restaurant owners provide a unique and modern experience for their customers through interactive websites instead of traditional menus. Our goal is for customers to easily browse, choose, and enjoy a seamless experience – while you, as the owner, control all the details through a simple dashboard.'
};

let typingTimeout = null;

function clearTypingAnimation() {
    if (typingTimeout) {
        clearTimeout(typingTimeout);
        typingTimeout = null;
    }
}

function initTypingAnimation() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;

    // Clear any existing typing animation
    clearTypingAnimation();

    // Get the current language from the HTML tag
    const currentLang = document.documentElement.getAttribute('lang') || 'ar';
    const text = aboutTexts[currentLang] || aboutTexts.ar;
    let charIndex = 0;
    let typingSpeed = 20; // Lower is faster
    let cursor = document.querySelector('.typing-cursor');
    
    // Reset cursor animation
    if (cursor) {
        cursor.style.animation = 'none';
        void cursor.offsetHeight; // Trigger reflow
        cursor.style.animation = '';
    }

    // Clear any existing text
    textElement.textContent = '';

    function type() {
        if (charIndex < text.length) {
            // Typing
            textElement.textContent = text.substring(0, charIndex + 1);
            charIndex++;
            // Random speed for natural feel
            typingSpeed = Math.random() * 20 + 10;
            
            // Schedule next character
            typingTimeout = setTimeout(type, typingSpeed);
        } else if (cursor) {
            // Keep cursor blinking after typing is done
            cursor.style.animation = 'blink 0.7s infinite';
        }
    }

    // Start the animation when the section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Small delay before starting the animation
                setTimeout(type, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('.about-section'));
}

// Initialize the typing animation when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Add a small delay to ensure all elements are loaded
        setTimeout(initTypingAnimation, 1000);
    });
} else {
    // If the document is already loaded
    setTimeout(initTypingAnimation, 1000);
}

// Make the function available globally
window.initTypingAnimation = initTypingAnimation;
