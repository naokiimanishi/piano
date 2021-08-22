(function() {
    const menu = document.getElementsByClassName("menuicon");
    const nav = document.getElementsByClassName("header-nav");
    const mask = document.getElementsByClassName("mask");
    const span = document.getElementsByTagName("span");

    menu[0].addEventListener("click", () => {
        nav[0].classList.toggle("toggle");
        mask[0].classList.toggle("mask-on");
        span[0].classList.toggle("cross1");
        span[1].classList.toggle("cross2");
        span[2].classList.toggle("cross3");
        menu[0].classList.toggle("box");
    });
    mask[0].addEventListener("click", () => {
        nav[0].classList.toggle("toggle");
        mask[0].classList.toggle("mask-on");
        span[0].classList.toggle("cross1");
        span[1].classList.toggle("cross2");
        span[2].classList.toggle("cross3");
        menu[0].classList.toggle("box");
    });

}());
