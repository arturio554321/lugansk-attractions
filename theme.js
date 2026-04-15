document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('themeBtn');

  const LIGHT_THEME = 'light-theme';
  const DARK_THEME = 'dark-theme';

  // Загружаем сохранённую тему при старте
  const savedTheme = localStorage.getItem('app-theme');
  if (savedTheme === DARK_THEME) {
    document.body.classList.remove(LIGHT_THEME);
    document.body.classList.add(DARK_THEME);
    themeBtn.textContent = '☀️';
  } else {
    // Если темы нет или она светлая — убеждаемся, что стоит light-theme
    document.body.classList.remove(DARK_THEME);
    document.body.classList.add(LIGHT_THEME);
    themeBtn.textContent = '🌙';
  }

  // Обработчик клика на кнопке
  themeBtn.addEventListener('click', function() {
    // Переключаем классы
    document.body.classList.toggle(LIGHT_THEME);
    document.body.classList.toggle(DARK_THEME);

    // Обновляем иконку кнопки и сохраняем тему
    const isDark = document.body.classList.contains(DARK_THEME);
    if (isDark) {
      themeBtn.textContent = '☀️';
      localStorage.setItem('app-theme', DARK_THEME);
    } else {
      themeBtn.textContent = '🌙';
      localStorage.setItem('app-theme', LIGHT_THEME);
    }
  });
});
