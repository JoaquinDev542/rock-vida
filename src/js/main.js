// Loader
window.addEventListener('load', function () {
    
    let hamburger = document.querySelector(".hamburger");
    let menuOpen = document.querySelector(".menuOpen");

    hamburger.addEventListener('click', function () {
        menuOpen.classList.toggle("active");
    });

})