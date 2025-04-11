import './style.css';
import createHome from './pages/home.js';
import createMenu from './pages/menu.js';
import createAbout from './pages/about.js';

function clearContent(container) {
    Array.from(container.children).forEach(child => {
        child.remove();
    });
}

function initializeButtons() {
    const container = document.getElementById('content');
    const buttons = Array.from(document.querySelector('nav').children);

    // Pre-create elements
    const homeElement = createHome();
    const menuElement = createMenu();
    const aboutElement = createAbout();

    // Load the home page by default
    container.appendChild(homeElement);

    buttons.forEach(btn => {
        const id = btn.id;
        btn.addEventListener('click', () => {
            clearContent(container);
            switch (id) {
                case 'home':
                    container.appendChild(homeElement);
                    break;
                case 'menu':
                    container.appendChild(menuElement);
                    break;
                case 'about':
                    container.appendChild(aboutElement);
                    break;
            }
        });
    });
}

initializeButtons();