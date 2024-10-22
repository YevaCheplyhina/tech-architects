document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('.mobile-nav-list .nav-link'),
    shopNowBtn: document.querySelector('.shop-now-btn'), // Кнопка Shop Now в хедері
    shopNowBtnMenu: document.querySelector('.shop-now-btn-menu'), // Кнопка Shop Now в мобільному меню
  };

  // Перевіряємо існування необхідних елементів
  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    // Закриття меню при кліку на посилання
    if (refs.navLinks.length) {
      refs.navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
      });
    }

    // Додаємо функціонал для кнопки Shop Now в хедері, яка веде до секції 'your-order'
    if (refs.shopNowBtn) {
      refs.shopNowBtn.addEventListener('click', () => {
        window.location.href = '#your-order'; // Переходимо до секції з id 'your-order'
      });
    }

    // Додаємо функціонал для кнопки Shop Now в мобільному меню
    if (refs.shopNowBtnMenu) {
      refs.shopNowBtnMenu.addEventListener('click', () => {
        refs.menu.classList.remove('is-open'); // Закриваємо мобільне меню
        refs.openMenuBtn.classList.remove('is-hidden'); // Показуємо кнопку відкриття меню
        window.location.href = '#your-order'; // Переходимо до секції з id 'your-order'
      });
    }
  }

  function toggleMenu() {
    refs.menu.classList.toggle('is-open'); // Тоглуємо клас для відкриття/закриття меню
  }
});
