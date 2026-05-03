document.addEventListener('DOMContentLoaded', () => {
    /* ===== Navbar Scroll ===== */
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 30);
        });
    }

    /* ===== Reveal on Scroll ===== */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ===== Counter Animation ===== */
    const statsBox = document.querySelector('.stats-row');
    let counted = false;

    if (statsBox) {
        const cObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !counted) {
                counted = true;
                document.querySelectorAll('.stat-number').forEach(el => {
                    const target = +el.dataset.target;
                    let current = 0;
                    const step = target / 120;
                    const tick = () => {
                        current += step;
                        if (current < target) {
                            el.textContent = Math.ceil(current) + '+';
                            requestAnimationFrame(tick);
                        } else {
                            el.textContent = target + '+';
                        }
                    };
                    tick();
                });
            }
        }, { threshold: 0.5 });
        cObserver.observe(statsBox);
    }

    /* ===== Mobile Menu ===== */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active-mobile');
            hamburger.classList.toggle('toggle');
        });

        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('active-mobile');
                hamburger.classList.remove('toggle');
            });
        });
    }
});
