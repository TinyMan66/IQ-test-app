export function loadAbout(app) {
    app.innerHTML = `
    <div class="about-page">
        <p class="test-description">Также по результатам теста <strong>вы получите</strong> подробные <strong>советы</strong> по определению наиболее перспективной <strong>для
        вашего типа</strong> <strong class="bold">интеллекта</strong> <strong>сферы деятельности</strong>, которая принесет вам скорейший финансовый результат.
        </p>
        <img src="../assets/images/brain_2.png" alt="brain picture">
        <button class="btn test-btn">Пройти тест</button>
    </div>
  `;
    const testButton = document.querySelector('.test-btn');

    testButton.addEventListener('click', async () => {
        const { loadTest } = await import('./testPage.js');
        loadTest(document.getElementById('app'));
    });
}
