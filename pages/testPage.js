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

const questions = [
    {
        question: "Ваш пол:",
        answers: ["Мужчина", "Женщина"],
    },
    {
        question: "Укажите ваш возраст:",
        answers: ["До 18", "От 18 до 28", "от 29 до 35", "От 36"],
    },{
        question: "Выберите лишнее:",
        answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
    },{
        question: "Продолжите числовой ряд: 18  20  24  32",
        answers: ["62", "48", "74", "57", "60", "77"],
    },{
        question: "Выберите цвет, который сейчас наиболее Вам приятен:",
        color: ["#a8a8a8", "#0b00a9", "#00a701", "#f60200","#fdff17", "#a95404", "#000000", "#850068", "#45b2ab"],
    },{
        question: "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
        color: ["#a8a8a8", "#45b2ab", "#a95404", "#00a701","#000000", "#f60200", "#850068", "#fdff17", "#0b00a9"],
    },{
        question: "Какой из городов лишний?",
        answers: ["Вашингтон", "Лондон", "Париж", "Нью-Йорк", "Москва", "Оттава"],
    },{
        question: "Выберите правильную фигуру из четырёх пронумерованных.",
        picture: "../assets/images/test/poses.png",
        answers: ["1", "2", "3", "4"],
    },{
        question: "Вам привычнее и важнее:",
        answers: ["Наслаждаться каждой минутой проведенного времени", "Быть устремленными мыслями в будущее", "Учитывать в ежедневной практике прошлый опыт"],
    },{
        question: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
        picture: "../assets/images/test/figure.png",
        answers: ["Оно остроконечное", "Оно устойчиво", "Оно находится в состоянии равновесия"],
    },{
        question: "Вставьте подходящее число",
        picture: "../assets/images/test/star.png",
        answers: ["34", "36", "53", "44", "66", "42"],
    },
];

let currentQuestionIndex = 0;

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
            <img src="../assets/images/main/main_brain.png" alt="brain picture" class="test-nav-image">
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
    const nextButton = document.querySelector('.next-btn');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    closeButton.addEventListener('click', function() {
        menu.classList.remove('open');
    });

    let currentQuestionIndex = 0;

    function renderQuestion(index) {
        const questionContainer = document.querySelector('.test-question');
        const answersContainer = document.querySelector('.test-answers');

        const questionData = questions[index];
        questionContainer.innerHTML = `<h2>${questionData.question}</h2>`;

        if (questionData.picture) {
            const img = document.createElement('img');
            img.src = questionData.picture;
            img.alt = "question image";
            questionContainer.appendChild(img);
        }

        answersContainer.innerHTML = '';

        if (questionData.answers) {
            questionData.answers.forEach((answer, i) => {
                const answerElement = document.createElement('div');
                answerElement.classList.add('answer');

                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'answer';
                radioInput.value = answer;
                radioInput.id = `answer-${i}`;

                const label = document.createElement('label');
                label.htmlFor = `answer-${i}`;
                label.textContent = answer;

                answerElement.appendChild(radioInput);
                answerElement.appendChild(label);

                answersContainer.appendChild(answerElement);
            });
        }

        if (questionData.color) {
            const colorGrid = document.createElement('div');
            colorGrid.classList.add('color-grid');
            questionData.color.forEach(color => {
                const colorElement = document.createElement('div');
                colorElement.classList.add('color');
                colorElement.style.backgroundColor = color;
                colorGrid.appendChild(colorElement);
            });
            answersContainer.appendChild(colorGrid);
        }
    }

    function handleNextButtonClick() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
        } else {
            alert("Тест завершен!");
        }
    }

    nextButton.addEventListener('click', handleNextButtonClick);

    document.addEventListener('change', function(event) {
        if (event.target.matches('input[type="radio"]')) {
            const labels = document.querySelectorAll('.test-answers .answer');
            labels.forEach(label => label.classList.remove('selected'));
            event.target.parentNode.classList.add('selected');
        }
    });

    renderQuestion(currentQuestionIndex);
}