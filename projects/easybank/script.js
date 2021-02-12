/* NAV BAR */
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

/* GSAP ANIMATIONS */

//  header
gsap.from(".header", {delay:".5", opacity: 0, duration: 1, y: -50, ease: "Power2.easeInOut"})

//  mobile background
gsap.from(".bg__mobile-bg", {opacity: 0, duration: 1,  ease: "Power2.easeInOut"})
gsap.from(".bg__mobile-mockups", {delay: ".5", opacity: 0, duration: 1,  ease: "Power2.easeInOut"})

//  desktop background
gsap.from(".bg__desktop-bg", {opacity: 0, duration: 1, x: 100, ease: "Power2.easeInOut"})
gsap.from(".bg__desktop-mockups", {delay: ".2", opacity: 0, duration: 1, y: -50, ease: "Power2.easeInOut"})

//  hero
gsap.from(".hero__title", {opacity: 0, duration: 1, y: -50, ease: "Power2.easeInOut"})
gsap.from(".hero__info", {opacity: 0, duration: 1, y: -50, delay: ".1",ease: "Power2.easeInOut"})
gsap.from(".hero__btn", {opacity: 0, duration: 1, y: -50, delay: ".2",ease: "Power2.easeInOut"})

//  features + articles
const featureDivs = document.querySelectorAll(".features__feature");
const articleDivs = document.querySelectorAll(".articles__article");

//function to use for both features and articles:
const loadDiv = (div, start) => {
    gsap.from(div, {
        scrollTrigger: {
            trigger: div,
            start: start
        }, 
        opacity: 0, 
        duration: 1,
        y: 50
    })
}

featureDivs.forEach(div => {
   loadDiv(div, "center bottom");
})
articleDivs.forEach(div => {
    loadDiv(div, "top bottom");
})


