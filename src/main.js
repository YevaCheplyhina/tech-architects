document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('.mobile-nav-list .nav-link'),
  };

  // Проверяем существование необходимых элементов
  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    // Закрытие меню при клике на ссылки
    if (refs.navLinks.length) {
      refs.navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
      });
    }
  }

  function toggleMenu() {
    refs.menu.classList.toggle('is-open'); // Открытие/закрытие мобильного меню
    refs.openMenuBtn.classList.toggle('is-hidden'); // Скрытие/отображение кнопки бургер-меню
  }
});
