document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
        const accordionItem = button.parentElement;
        
        // Закрываем все остальные
        document.querySelectorAll(".accordion-item").forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove("active");
            }
        });

        // Переключаем текущий
        accordionItem.classList.toggle("active");
    });
});





document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
    const slider = wrapper.querySelector('.slider');
    const slides = wrapper.querySelectorAll('.slide');
    const progressBar = wrapper.querySelector('.progress-bar');
    const prevBtn = wrapper.querySelector('#prev');
    const nextBtn = wrapper.querySelector('#next');

    let index = 0;
    let startX = 0;
    let moveX = 0;
    let isSwiping = false;

    // Функция для определения текущего шага
    function getStep() {
        return window.matchMedia('(max-width: 600px)').matches ? 81 : 33.3;
    }

    let totalSlides = slides.length;
    let step = getStep();
    let visibleSlides = Math.floor(100 / step);
    let maxIndex = totalSlides - visibleSlides;

    nextBtn.addEventListener('click', () => {
        if (index < maxIndex) {
            index++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${index * step}%)`;
        if (progressBar) {
            const progress = ((index + 1) / (maxIndex + 1)) * 100;
            progressBar.style.width = `${progress}%`;
        }
    }

    // Добавляем поддержку свайпа
    slider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isSwiping = true;
    });

    slider.addEventListener('touchmove', e => {
        if (!isSwiping) return;
        moveX = e.touches[0].clientX - startX;
    });

    slider.addEventListener('touchend', () => {
        if (!isSwiping) return;
        isSwiping = false;

        // Определяем направление свайпа
        if (moveX < -50 && index < maxIndex) {
            index++;
        } else if (moveX > 50 && index > 0) {
            index--;
        }

        updateSlider();
    });

    // Обновляем шаг при изменении размера окна
    window.addEventListener('resize', () => {
        let newStep = getStep();
        if (newStep !== step) {
            step = newStep;
            updateSlider();
        }
    });
});

window.addEventListener('scroll', function() {
    let redBox1 = document.querySelector('.forever-btn-1');
    let redBox2 = document.querySelector('.forever-btn-2');

    // Получаем высоту страницы и текущую прокрутку
    let scrollPosition = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight;
    let viewportHeight = window.innerHeight;

    // Используем процент от высоты страницы для появления плашек
    let triggerPoint1 = pageHeight * 0.22; // 65% от высоты страницы для первого элемента
    let triggerPoint2 = pageHeight * 0.22; // 75% от высоты страницы для второго элемента

    if (window.innerWidth <= 600) {
        triggerPoint1 = pageHeight * 0.30; // 15% от высоты страницы
        triggerPoint2 = pageHeight * 0.30; // 18%
    }

    // Проверка, когда плашечки должны появиться
    if (scrollPosition > triggerPoint1) {
        redBox1.classList.add('visible');
    } else {
        redBox1.classList.remove('visible');
    }

    if (scrollPosition > triggerPoint2) {
        redBox2.classList.add('visible2');
    } else {
        redBox2.classList.remove('visible2');
    }
});



window.addEventListener('scroll', function() {
    let comBox = document.querySelector('.c6-flying-div1');
    let comBox2 = document.querySelector('.c6-flying-div2');
    let comBox3 = document.querySelector('.c6-flying-div3');

    // Получаем высоту страницы и текущую прокрутку
    let scrollPosition = window.scrollY;
    let pageHeight = document.documentElement.scrollHeight;
    let viewportHeight = window.innerHeight;

    // Используем процент от высоты страницы для появления плашек
    let triggerPoint1 = pageHeight * 0.8; // 65% от высоты страницы для первого элемента
    let triggerPoint2 = pageHeight * 0.8; // 75% от высоты страницы для второго элемента
    if (window.innerWidth <= 600) {
        triggerPoint1 = pageHeight * 0.87; // 15% от высоты страницы
        triggerPoint2 = pageHeight * 0.87; // 18%
    }

    // Проверка, когда плашечки должны появиться
    if (scrollPosition > triggerPoint1) {
        comBox.classList.add('visible3');
    } else {
        comBox.classList.remove('visible3');
    }

    if (scrollPosition > triggerPoint2) {
        comBox2.classList.add('visible4');
    } else {
        comBox2.classList.remove('visible4');
    }
    if (scrollPosition > triggerPoint2) {
        comBox3.classList.add('visible5');
    } else {
        comBox3.classList.remove('visible5');
    }
});
