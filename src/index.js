import './style.css'

const container = document.getElementById('content')
const buttons = Array.from(document.querySelector('nav').children);

function clearContent(){
    Array.from(container.children).forEach(child => {
        child.remove();
    });
}

buttons.forEach(btn => {
    const id = btn.id
    switch (id) {
        case 'home': {
            btn.addEventListener("click", () => {
                clearContent();
                const div = document.createElement("div");
                div.textContent = "Home"
                container.appendChild(div)
            });
            break;
        }
        case 'menu': {
            btn.addEventListener("click", () => {
                clearContent();
                const div = document.createElement("div");
                div.textContent = "Menu"
                container.appendChild(div)
            });
            break;
        }
        case 'about': {
            btn.addEventListener("click", () => {
                clearContent();
                const div = document.createElement("div");
                div.textContent = "About"
                container.appendChild(div)
            });
            break;
        }
    }
});