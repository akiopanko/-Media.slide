    const sliderContainer = document.querySelector('.slider_container');
    const sliderBodies = document.querySelectorAll('.slider_body');
    const totalSlides = sliderBodies.length;
    let currentSlide = 0;

    document.getElementById('adelante').addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });

    document.getElementById('atras').addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    function updateSlider() {
        sliderBodies.forEach((body, index) => {
            if (index === currentSlide) {
                body.classList.add('slider_body_show');
            } else {
                body.classList.remove('slider_body_show');
            }
        });
    }
