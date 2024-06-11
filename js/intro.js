document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");

    // Fade in the container immediately
    container.style.opacity = 1;

    // Fade out the entire container after the animations
    setTimeout(() => {
        container.style.animation = "fadeOut 2s forwards";
    }, 2500); 
});
