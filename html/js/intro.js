document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");

    // Fade in the container immediately
    intro.style.opacity = 1;

    // Fade out the entire container after the animations
    setTimeout(() => {
        intro.style.animation = "fadeOut 2s forwards";
    }, 2500); 
});
