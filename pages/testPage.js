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
}

