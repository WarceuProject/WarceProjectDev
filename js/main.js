const navbar = document.getElementById("navbar");
navbar.style.transition = ".3s ease-in-out";
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // if(scrolled <= 490) {
        // navbar.style.transform = "translateY(-100px)";
        // } else {
            //     navbar.style.transform = "translateY(0)";
            // }
    if(scrollTop > lastScrollTop) {
        navbar.style.transform = "translateY(-100px)";
    } else {
        navbar.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop;
});
