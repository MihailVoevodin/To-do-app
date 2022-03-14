function menu() {
    const menu = document.querySelector('.header__top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > '100') {
            menu.style.backgroundColor = "#b00";
        } else {
            menu.style.backgroundColor = "transparent";
        }
    })
}

export default menu;