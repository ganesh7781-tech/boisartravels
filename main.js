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

    /* ===== Hero Slider ===== */
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    /* ===== Promo Modals Sequence ===== */
    const promoModal = document.getElementById('promoModal');
    const damanModal = document.getElementById('damanModal');

    if (promoModal) {
        // Show immediately on every refresh
        setTimeout(() => {
            promoModal.classList.add('active');
        }, 500);

        const closeBtn = promoModal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                promoModal.classList.remove('active');
            });
        }
        promoModal.addEventListener('click', (e) => {
            if (e.target === promoModal) promoModal.classList.remove('active');
        });
    }

    if (damanModal) {
        // Show after 15 seconds
        setTimeout(() => {
            // Close first modal if still open
            if (promoModal) promoModal.classList.remove('active');
            damanModal.classList.add('active');
        }, 15000);

        const closeBtn = damanModal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                damanModal.classList.remove('active');
            });
        }
        damanModal.addEventListener('click', (e) => {
            if (e.target === damanModal) damanModal.classList.remove('active');
        });
    }


    /* ===== Quick Booking WhatsApp Handler ===== */
    const bookBtn = document.getElementById('formWhatsApp');
    if (bookBtn) {
        bookBtn.addEventListener('click', (e) => {
            const pickup = document.getElementById('pickupLoc').value;
            const drop = document.getElementById('dropLoc').value;
            const vehicle = document.getElementById('vehicleType').value;
            const date = document.getElementById('travelDate').value;

            let message = "Hi Boisar Travels! I would like to book a ride.%0A%0A";
            if (pickup) message += "*From:* " + pickup + "%0A";
            if (drop) message += "*To:* " + drop + "%0A";
            if (vehicle) message += "*Vehicle:* " + vehicle + "%0A";
            if (date) message += "*Date:* " + date + "%0A";
            message += "%0APlease confirm availability.";

            bookBtn.href = "https://wa.me/918624849674?text=" + message;
        });
    }

});
