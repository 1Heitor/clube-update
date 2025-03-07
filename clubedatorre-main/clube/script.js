document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.dropdown__item');
  
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav__link');
        link.addEventListener('click', function () {
            const menu = item.querySelector('.dropdown__menu');
  
            // Fecha outros menus que possam estar abertos
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherMenu = otherItem.querySelector('.dropdown__menu');
                    if (otherMenu) {
                        otherMenu.style.maxHeight = null;
                    }
                }
            });
  
            // Alterna o menu do item clicado
            if (menu.style.maxHeight) {
                menu.style.maxHeight = null;
            } else {
                menu.style.maxHeight = menu.scrollHeight + 'px';
            }
        });
    });
  
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
  
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show-menu');
        this.classList.toggle('show-icon');
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os itens de dropdown
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    
    dropdownItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove a classe 'active' de todos os itens
        dropdownItems.forEach(el => {
          if (el !== item) {
            el.classList.remove('active');
          }
        });
        // Alterna a classe 'active' no item clicado
        item.classList.toggle('active');
      });
    });
  });
  
 let currentIndex = 0;
 const images = [
 'imgs/1.png',
 'imgs/2.png',
 'imgs/3.png',
 'imgs/5.png',
 'imgs/6.png',
 'imgs/7.png',
 ];

 function openLightbox(index) {
     currentIndex = index;
     showLightbox();
 }

 function showLightbox() {
     const lightbox = document.getElementById('lightbox');
     const lightboxImage = document.getElementById('lightboxImage');
     lightboxImage.src = images[currentIndex];
     lightbox.style.display = 'flex';
 }

 function closeLightbox() {
     document.getElementById('lightbox').style.display = 'none';
 }

 function changeImage(direction) {
     currentIndex += direction;
     if (currentIndex >= images.length) {
         currentIndex = 0;
     }
     if (currentIndex < 0) {
         currentIndex = images.length - 1;
     }
     showLightbox();
 }