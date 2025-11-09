document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-bar .filter-btn');
    const galleryItems = document.querySelectorAll('.masonry-grid .gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide'); 
                } else {
                    item.classList.add('hide'); 
                }
            });
        });
    });
    const animateValue = (el, start, end, duration) => {
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);           
            let currentValue = Math.floor(progress * (end - start) + start);
            el.textContent = currentValue.toLocaleString('uk-UA');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                el.textContent = end.toLocaleString('uk-UA');
                if (el.dataset.suffix) {
                    el.textContent += el.dataset.suffix;
                }
            }
        };
        window.requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const targetValue = parseInt(el.dataset.value, 10);
                animateValue(el, 0, targetValue, 2000); 
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.5 
    });
    const counters = document.querySelectorAll('.stat-number[data-value]');
    counters.forEach(counter => {
        observer.observe(counter);
    });
});