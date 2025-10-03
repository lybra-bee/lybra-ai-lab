// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Динамическое обновление года в футере
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }

    // Добавление класса для загруженных изображений
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Подсветка активного раздела навигации при скролле
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

    function highlightNavLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    console.log('Lybra AI Lab initialized');
});
