document.addEventListener('DOMContentLoaded', function () {
    // Animate elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.course-card, .feature-card, .pricing-card, .info-item');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('slide-in-up');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Animate hero elements
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    setTimeout(() => {
        heroContent.classList.add('slide-in-left');
        heroImage.classList.add('slide-in-right');
    }, 500);

    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.hero-stats');

    const animateStats = function () {
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;

        if (sectionPosition < screenPosition) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const speed = 200;
                const increment = target / speed;
                let current = 0;

                const updateNumber = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        setTimeout(updateNumber, 1);
                    } else {
                        stat.textContent = target;
                    }
                };

                updateNumber();
                stat.classList.add('counter-animate');
            });

            // Remove event listener after animation
            window.removeEventListener('scroll', animateStats);
        }
    };

    window.addEventListener('scroll', animateStats);

    // Add hover animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('btn-hover-animation');
    });

    // Add underline animation to links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.add('underline-animation');
    });

    // Course card hover effect
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.course-image img').style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function () {
            this.querySelector('.course-image img').style.transform = 'scale(1)';
        });
    });

    // Feature card hover effect
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.querySelector('.feature-icon').style.transform = 'rotate(15deg) scale(1.1)';
        });

        card.addEventListener('mouseleave', function () {
            this.querySelector('.feature-icon').style.transform = 'rotate(0) scale(1)';
        });
    });

    // Pricing card hover effect
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.boxShadow = 'var(--box-shadow)';
        });
    });
});