export function loadHome(app) {
    app.innerHTML = `
<nav>
    <div class="menu-toggle" id="menu-toggle">
        <img src="../assets/icons/navBar.svg" alt="menu icon">
    </div>
    <div class="menu" id="menu">
        <div class="button-container">
            <button class="close-btn">
                <img src="../assets/icons/close.svg" alt="close icon">
            </button>
        </div>
        <a href="#" data-page="home">Главная</a>
        <a href="#" data-page="about">Информация о тесте</a>
        <a href="#" data-page="test">Пройти тест</a>
    </div>
</nav>
    <div class="main">
        <span class="description">Пройдите точный и быстрый </span>
        <h1 class="test-title">Тест на определение IQ </h1>
        <img src="../assets/images/main/main_brain.png" alt="brain picture">
        <button class="btn test-btn">Пройти тест</button>
        <span class="yellow-text"> И получите рекомендации по развитию своего интеллекта </span>
        <span class="white-text">и улучшению финансового благосостояния и личной жизни</span>
        <div class="more-info">
            <button class=" btn more-info-btn">
                <img src="../assets/icons/arrowUp.svg" alt="arrow up">
            </button>
            <span>Подробнее</span>
        </div>
    </div>
    <footer>
        <div class="footer-content">
            " Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя. "
        </div>
    </footer>
  `;
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeButton = document.querySelector('.close-btn');
    const moreInfoBtn = document.querySelector('.more-info-btn');
    const footer = document.querySelector('footer');
    const testButton = document.querySelector('.test-btn');

    function onNavClick(event) {
        if (event.target.matches('a')) {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            history.pushState({ page }, '', `#${page}`);
            navigateTo(page);
        }
    }

    function navigateTo(page) {
        const loadPage = routes[page] || (() => app.innerHTML = '<h1>404</h1><p>Page not found.</p>');
        loadPage(app);
    }

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) {
            menuToggle.style.display = 'none';
        }
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('open');
        menuToggle.style.display = 'block';
    });

    document.body.addEventListener('click', onNavClick);

    testButton.addEventListener('click', async () => {
        const { loadTest } = await import('./testPage.js');
        loadTest(document.getElementById('app'));
    });
    const toggleFooter = () => {
        const isExpanded = footer.style.bottom === '0px';
        footer.style.bottom = isExpanded ? '-100px' : '0px';
    };

    moreInfoBtn.addEventListener('click', toggleFooter);

    document.addEventListener('click', (event) => {
        if (!footer.contains(event.target) && !moreInfoBtn.contains(event.target)) {
            footer.style.bottom = '-100px';
        }
    });

    footer.addEventListener('click', (event) => event.stopPropagation());
    moreInfoBtn.addEventListener('click', (event) => event.stopPropagation());
}