document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

        const menuBtn = document.getElementById('menu-btn');
         const mobileMenu = document.getElementById('mobile-menu');

         menuBtn.addEventListener('click', () => {
         mobileMenu.classList.toggle('show');
});

