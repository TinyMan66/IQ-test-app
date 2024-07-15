import { MainPage } from './mainPage.js';
import { InfoPage } from './infoPage.js';
import { TestPage } from './testPage.js';

export const router = () => {
    const content = document.getElementById('content');
    const hash = window.location.hash.substring(1);

    switch (hash) {
        case 'info':
            InfoPage(content);
            break;
        case 'test':
            TestPage(content);
            break;
        default:
            MainPage(content);
    }
};