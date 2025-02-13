
function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });
}

function createHeart() {
    // Create a new heart element
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Randomize horizontal and vertical positions within the viewport
    heart.style.left = Math.random() * (window.innerWidth - 50) + "px";  // Random left position
    heart.style.top = Math.random() * (window.innerHeight - 50) + "px";   // Random top position

    // Set random animation duration between 3s and 5s
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; 

    // Add the heart to the document body
    document.body.appendChild(heart);

    // Optionally remove heart after 5 seconds
    // setTimeout(() => {
    //     heart.remove();
    // }, 5000);
}

// Create 50 hearts with a delay between each to avoid overlap
for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 100); // Create hearts with 100ms delay
}
