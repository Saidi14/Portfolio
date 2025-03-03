const navLinks = document.querySelectorAll(".links li");
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function(){
        link.style.background= "#cacbcc";
    });
    link.addEventListener("mouseleave", function(){
        link.style.background= "white";
    });
    
});
