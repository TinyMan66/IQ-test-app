export function loadTest(app) {
    app.innerHTML = `
    <div class="test-page">
        <p class="test-info">
        Прохождение теста займет у вас не более<span>12 минут</span>, а его результаты вы сможете<span>использовать всю жизнь. </span>
        </p>
        <p class="test-info-second">
        Профессиональная интерпретация и детально <strong>проработанные рекомендации</strong> позволят вам качественно <strong>изменить все аспекты своей жизни</strong>: от финансового до любовного.
        </p>
        <button class="btn test-info-btn">Пройти тест</button>
    </div>
  `;
    document.querySelector('.test-info-btn').addEventListener('click', startTest);
}

function startTest() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <nav class="test-nav">
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
            <img src="../assets/images/main_brain.png" alt="brain picture" class="test-nav-image">
            <span class="nav-text">Тест на определение IQ</span>
        </nav>
        <div class="test-container">
            <div class="progress-bar-container">
                <div class="progress-bar"></div>
            </div>
            <div class="test-question"></div>
            <div class="test-answers"></div>
            <button class="btn next-btn">Далее</button>
        </div>
    `;
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeButton = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('open');
    });
}