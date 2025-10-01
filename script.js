// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Создание анимированных нейронов в шапке
    function createNeurons() {
        const neuronContainer = document.getElementById('neuronContainer');
        if (!neuronContainer) return;
        
        const neuronCount = 20;
        
        for (let i = 0; i < neuronCount; i++) {
            const neuron = document.createElement('div');
            neuron.className = 'neuron';
            
            // Случайная позиция
            neuron.style.left = Math.random() * 100 + '%';
            neuron.style.top = Math.random() * 100 + '%';
            
            // Случайная задержка анимации
            neuron.style.animationDelay = Math.random() * 3 + 's';
            
            // Случайный размер
            const size = 2 + Math.random() * 3;
            neuron.style.width = size + 'px';
            neuron.style.height = size + 'px';
            
            neuronContainer.appendChild(neuron);
        }
    }

    // Плавная прокрутка для навигации
    function initSmoothScroll() {
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
    }

    // Анимация появления элементов при скролле
    function initScrollAnimations() {
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
        document.querySelectorAll('.hardware-item, .experiment-card, .result-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Показ системной информации
    function initSystemInfo() {
        const stats = document.querySelector('.lab-stats');
        if (stats) {
            // Можно добавить реальную статистику здесь
            console.log('Система лаборатории инициализирована');
        }
    }

    // Обработка изображений
    function initImageLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        let loadedCount = 0;
        const totalImages = images.length;

        images.forEach(img => {
            img.addEventListener('load', function() {
                loadedCount++;
                if (loadedCount === totalImages) {
                    console.log('Все изображения лаборатории загружены');
                }
            });
            
            img.addEventListener('error', function() {
                console.log('Ошибка загрузки изображения:', img.src);
                img.alt = 'Изображение не загружено';
            });
        });
    }

    // Инициализация всех функций
    function init() {
        createNeurons();
        initSmoothScroll();
        initScrollAnimations();
        initSystemInfo();
        initImageLoading();
        
        console.log('🧪 Lybra AI Lab инициализирован');
    }

    // Запуск инициализации
    init();
});
