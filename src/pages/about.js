export default function createAbout() {
    const mainBlock = document.createElement("div");
    mainBlock.classList.add("about");

    // Title
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    mainBlock.appendChild(h1);

    // Description
    const p1 = document.createElement("p");
    p1.textContent = "Welcome to the One Piece Restaurant, where adventure meets flavor!";
    mainBlock.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Inspired by the Grand Line, our dishes are crafted with the spirit of the Straw Hat Pirates. Whether you're a swordsman, navigator, or captain, there's something here for everyone!";
    mainBlock.appendChild(p2);

    // Fun Fact Section
    const funFactTitle = document.createElement("h2");
    funFactTitle.textContent = "Fun Fact!";
    mainBlock.appendChild(funFactTitle);

    const funFact = document.createElement("p");
    funFact.textContent = "Our head chef trained under Sanji himself, ensuring every dish is worthy of a pirate's appetite!";
    mainBlock.appendChild(funFact);

    return mainBlock;
}