import { router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    router();
    document.querySelectorAll('a[data-link]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const page = event.target.getAttribute('data-link');
            window.history.pushState({}, '', `#${page}`);
            router();
        });
    });

    window.addEventListener('popstate', router);
});
