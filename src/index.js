import './style.css'

function clearContent(container){
    Array.from(container.children).forEach(child => {
        child.remove();
    });
}
function createHome(){
    const mainBlock = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.textContent = "Home"
    const p = document.createElement("p")
    p.textContent = "Welcome to our restaurant! We are glad to have you here."
    mainBlock.append(h1, p)
    return mainBlock
}
function createMenu(){
    const mainBlock = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.textContent = "Menu"
    const p = document.createElement("p")
    p.textContent = "Check out our delicious menu!"
    mainBlock.append(h1, p)
    return mainBlock
}
function createAbout(){
    const mainBlock = document.createElement("div")
    const h1 = document.createElement("h1")
    h1.textContent = "About"
    const p = document.createElement("p")
    p.textContent = "Learn more about us!"
    mainBlock.append(h1, p)
    return mainBlock
}
function initializeButtons(){
    const container = document.getElementById('content')
    
    const buttons = Array.from(document.querySelector('nav').children);

    buttons.forEach(btn => {
        const id = btn.id
        switch (id) {
            case 'home': {
                btn.addEventListener("click", () => {
                    clearContent(container);
                    container.appendChild(createHome())
                });
                break;
            }
            case 'menu': {
                btn.addEventListener("click", () => {
                    clearContent(container);
                    container.appendChild(createMenu())
                });
                break;
            }
            case 'about': {
                btn.addEventListener("click", () => {
                    clearContent(container);
                    container.appendChild(createAbout())
                });
                break;
            }
        }
    });
}
initializeButtons();