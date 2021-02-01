const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav")
const overlay = document.querySelector(".nav__overlay");

toggleNav = () => {
    burger.classList.toggle("active")
    nav.classList.toggle("active")
    overlay.classList.toggle("active")
}
//modal/nav will close if either burger or overlay is clicked
burger.addEventListener("click", toggleNav) 
overlay.addEventListener("click", toggleNav)

