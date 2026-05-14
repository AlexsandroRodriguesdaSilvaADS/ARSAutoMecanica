const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnEsq = document.querySelector('.esquerdo');
const btnDir = document.querySelector('.direito');

let index = 0;

function mostrarSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

btnDir.addEventListener('click', () => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
});

btnEsq.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarSlide();
});

setInterval(() => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
}, 3000);