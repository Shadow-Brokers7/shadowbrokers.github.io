const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.textContent = body.classList.contains('light-theme') ? '🌞' : '🌙';
});


document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.querySelector(".stars");
    const galaxiesContainer = document.querySelector(".galaxies");

    // Crear estrellas
    for (let i = 0; i < 200; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        const size = Math.random() * 3 + 1; // Tamaño aleatorio
        const positionX = Math.random() * 100; // Posición horizontal
        const positionY = Math.random() * 100; // Posición vertical
        const duration = Math.random() * 20 + 10; // Duración del movimiento

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${positionY}vh`;
        star.style.left = `${positionX}vw`;
        star.style.animationDuration = `${duration}s`;

        starsContainer.appendChild(star);
    }

    // Crear galaxias
    for (let i = 0; i < 10; i++) {
        const galaxy = document.createElement("div");
        galaxy.classList.add("galaxy");
        const size = Math.random() * 50 + 30; // Tamaño aleatorio
        const positionX = Math.random() * 100; // Posición horizontal
        const positionY = Math.random() * 100; // Posición vertical
        const duration = Math.random() * 40 + 20; // Duración del movimiento

        galaxy.style.width = `${size}px`;
        galaxy.style.height = `${size}px`;
        galaxy.style.top = `${positionY}vh`;
        galaxy.style.left = `${positionX}vw`;
        galaxy.style.animationDuration = `${duration}s`;

        galaxiesContainer.appendChild(galaxy);
    }

    console.log("Stars and galaxies generated!");
});

