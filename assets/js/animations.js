
(function () {
    'use strict';

    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.fade-up').forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(function (el) {
        observer.observe(el);
    });

})();