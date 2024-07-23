export function loadHome(app) {
    app.innerHTML = `
    <div class="main">
        <span class="description">Пройдите точный и быстрый </span>
        <h1 class="test-title">Тест на определение IQ </h1>
        <img src="../assets/images/main_brain.png" alt="brain picture">
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
    const moreInfoBtn = document.querySelector('.more-info-btn');
    const footer = document.querySelector('footer');
    const testButton = document.querySelector('.test-btn');

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