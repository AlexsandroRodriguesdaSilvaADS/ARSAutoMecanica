let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function updateCarousel() {
    // Move o trilho baseado no index atual (0%, -100%, -200%, etc.)
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Atualiza as bolinhas indicadoras
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function moveSlide(direction) {
    currentIndex += direction;

    // Loop do carrossel (volta pro início ou vai pro fim)
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateCarousel();
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Opcional: Autoplay (muda de slide a cada 3 segundos)
setInterval(() => {
    moveSlide(1);
}, 3000);