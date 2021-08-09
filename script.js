const toggle = (() => {
    const menu = document.getElementsByClassName("menu");

    const nav = document.getElementsByClassName("header-navi");

    menu[0].addEventListener("click", () => {
        nav[0].classList.add("sp");
        console.log(nav[0]);
    })
})();