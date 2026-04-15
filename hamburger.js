document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const nav = document.getElementById('nav');

    // Если элементы не найдены, выходим
    if (!hamburgerBtn || !nav) {
        console.warn('Элементы nav и hamburger меню не найдены');
        return;
    }
    
    // Открытие/закрытие меню по клику на бургер
    hamburgerBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку внутри меню
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            nav.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        };
    });
});