import dishes from "../assets/dishes.js";

export default function createHome() {
    const mainBlock = document.createElement("div");
    mainBlock.classList.add("home");

    // Title
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to One Piece Restaurant!";
    mainBlock.appendChild(h1);

    // Description
    const p = document.createElement("p");
    p.textContent = "Set sail on a culinary adventure with dishes inspired by the Grand Line!";
    mainBlock.appendChild(p);

    const dishList = document.createElement("ul");
    dishList.classList.add("dish-list");

    dishes.forEach(dish => {
        const dishItem = document.createElement("li");
        dishItem.classList.add("dish-item");

        const dishName = document.createElement("h2");
        dishName.textContent = dish.name;

        const dishDescription = document.createElement("p");
        dishDescription.textContent = dish.description;

        dishItem.append(dishName, dishDescription);
        dishList.appendChild(dishItem);
    });

    mainBlock.appendChild(dishList);

    return mainBlock;
}