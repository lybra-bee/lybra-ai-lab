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
            
            neuron.style.left = Math.random() * 100 + '%';
            neuron.style.top = Math.random() * 100 + '%';
            neuron.style.animationDelay = Math.random() * 3 + 's';
            
            const size = 2 + Math.random() * 3;
            neuron.style.width = size + 'px';
            neuron.style.height = size + 'px';
            
            neuronContainer.appendChild(neuron);
        }
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
                    
                    // Добавляем класс для триггера анимации
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Наблюдаем за всеми элементами для анимации
        const elementsToAnimate = document.querySelectorAll(
            '.hardware-item, .experiment-card, .result-item, .note-item'
        );
        
        elementsToAnimate.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
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

    // Инициализация всех функций
    function init() {
        createNeurons();
        initSmoothScroll();
        initScrollAnimations();
        
        console.log('🧪 Lybra AI Lab с анимациями инициализирован');
    }

    // Запуск
    init();
});
