// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигации
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

    // Анимация появления элементов при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками оборудования и экспериментов
    document.querySelectorAll('.hardware-item, .experiment-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Показ уведомления о загрузке изображений
    const images = document.querySelectorAll('img[loading="lazy"]');
    let loadedCount = 0;
    const totalImages = images.length;

    images.forEach(img => {
        img.addEventListener('load', function() {
            loadedCount++;
            if (loadedCount === totalImages) {
                console.log('Все изображения загружены');
            }
        });
        
        img.addEventListener('error', function() {
            console.log('Ошибка загрузки изображения:', img.src);
            img.alt = 'Изображение не загружено';
        });
    });
});
