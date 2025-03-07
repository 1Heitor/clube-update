document.addEventListener('DOMContentLoaded', () => {
    // Inicializa todos os carrosséis
    document.querySelectorAll('.carousel').forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const items = inner.children;
        const totalItems = items.length;
        let currentIndex = 0;

        // Mostra o primeiro slide inicialmente
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Botões de navegação
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalItems;
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    });
});