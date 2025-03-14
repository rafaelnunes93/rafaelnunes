document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        var homeSection = document.getElementById("inicio");
        
        if (homeSection) {
            var homeHeight = homeSection.offsetHeight;
            if (window.scrollY > homeHeight) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });
});