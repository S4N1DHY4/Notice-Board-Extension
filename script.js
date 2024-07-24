// script.js
document.addEventListener("DOMContentLoaded", () => {
    const tomatoIcon = document.getElementById("tomato-icon");
    const popup = document.getElementById("popup");
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    document.body.appendChild(overlay);

    tomatoIcon.addEventListener("click", () => {
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    document.getElementById("close-popup").addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});
