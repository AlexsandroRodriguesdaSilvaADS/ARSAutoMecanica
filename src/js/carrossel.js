/*
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
}, 3000);*/

// Lista com as URLs das imagens principais
const images = [
  "./src/imagens/embreagem-alfa.webp",
  "./src/imagens/amortecedores-alfa.webp",
  "./src/imagens/coxins-batedores-coifas-alfa.webp",
  "./src/imagens/bandeja-alfa.webp",
  "./src/imagens/bucha-traseira-alfa.webp",
  "./src/imagens/discos-de-freio-alfa.webp",
  "./src/imagens/pastilhas-de-freio-alfa.webp",
  "./src/imagens/lonas-de-freio-alfa.webp",
  "./src/imagens/cilindro-mestre-alfa.webp",
  "./src/imagens/servo-freio-alfa.webp",
  "./src/imagens/junta-homocinetica-alfa.webp",
  "./src/imagens/deslizante-e-trizeta-alfa.webp",
  "./src/imagens/eixo-completo-alfa.webp",
  "./src/imagens/kit-radiador-alfa.webp",
  "./src/imagens/coxins-do-motor-alfa.webp",
  "./src/imagens/correia-e-rolamento-alfa.webp"
];

let currentIndex = 0;
let autoPlayInterval;
const mainImage = document.getElementById("active-img");
const thumbnails = document.querySelectorAll(".thumb");

// Função para atualizar a imagem e as miniaturas
function changeImage(index) {
  currentIndex = index;

  // Atualiza a imagem principal
  mainImage.src = images[currentIndex];

  // Atualiza o destaque das miniaturas
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });
}

// Avança para a próxima imagem
function nextImage() {
  let nextIndex = (currentIndex + 1) % images.length;
  changeImage(nextIndex);
}

// Volta para a imagem anterior
function prevImage() {
  let prevIndex = (currentIndex - 1 + images.length) % images.length;
  changeImage(prevIndex);
}

// Configura o Carrossel Automático (avança a cada 4 segundos)
function startAutoPlay() {
  autoPlayInterval = setInterval(nextImage, 4000);
}

// Pausa o carrossel automático quando o mouse passa por cima
document.querySelector(".carousel-slide").addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval);
});

// Retoma o carrossel automático quando o mouse sai
document.querySelector(".carousel-slide").addEventListener("mouseleave", startAutoPlay);

// Adiciona eventos aos botões
document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);

// Inicia o autoplay na carga da página
startAutoPlay();

