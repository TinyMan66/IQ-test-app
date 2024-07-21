import { loadHome } from './pages/homePage.js';
import { loadAbout } from './pages/aboutPage.js';
import { loadTest } from './pages/testPage.js';

document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const closeButton = document.querySelector('.closeButton');

    const routes = {
        home: loadHome,
        about: loadAbout,
        test: loadTest
    };

    function navigateTo(page) {
        const loadPage = routes[page] || (() => app.innerHTML = '<h1>404</h1><p>Page not found.</p>');
        loadPage(app);
    }

    function onNavClick(event) {
        if (event.target.matches('a')) {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');
            history.pushState({ page }, '', `#${page}`);
            navigateTo(page);
            menu.classList.remove('open');
            menuToggle.style.display = 'block';
        }
    }

    window.onpopstate = function (event) {
        navigateTo(event.state ? event.state.page : 'home');
    };

    document.body.addEventListener('click', onNavClick);

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

    // Initial load
    const initialPage = location.hash.replace('#', '') || 'home';
    navigateTo(initialPage);
    history.replaceState({ page: initialPage }, '', `#${initialPage}`);
});
