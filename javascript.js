const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.textContent = body.classList.contains('light-theme') ? '🌞' : '🌙';
});


const projectCarousel = document.querySelector('.project-carousel');

let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 300; // Ajusta el desplazamiento
    if (scrollAmount >= projectCarousel.scrollWidth) {
        scrollAmount = 0;
    }
    projectCarousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
}, 3000); // Intervalo de 3 segundos
