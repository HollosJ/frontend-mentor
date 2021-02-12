



//navbar
const overlay = document.querySelector(".overlay");
const header = document.querySelector(".header")
const btns = document.querySelectorAll(".nav-control");

toggleNav = () => {
    header.classList.toggle("active");
    overlay.classList.toggle("active");
}

btns.forEach(btn => {
    btn.addEventListener("click", toggleNav);
})
overlay.addEventListener("click", toggleNav);


//hero

const btnDec = document.getElementById("hero_left");
const btnInc = document.getElementById("hero_right");
const imgMob = document.querySelector(".hero-mobile");
const imgDesk = document.querySelector(".hero-desktop");

const title = document.getElementById("hero_title")
const text = document.getElementById("hero_text")

let idx = 0; 
const data_text = [
    {
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
const img_mobile = ["img/mobile-image-hero-1.jpg", "img/mobile-image-hero-2.jpg", "img/mobile-image-hero-3.jpg"];
const img_desktop = ["img/desktop-image-hero-1.jpg", "img/desktop-image-hero-2.jpg", "img/desktop-image-hero-3.jpg"];

btnDec.addEventListener("click", () => {
    if(idx == 0){
        idx = 2
    } else {
        idx--
    }
    update()
})


increment = () => {
    if(idx == 2){
        idx = 0;
    } else {
        idx++
    }
    update()
}
btnInc.addEventListener("click", increment)

update = () => {
    imgMob.src = img_mobile[idx];
    imgDesk.src = img_desktop[idx];
    title.innerText = data_text[idx].title;
    text.innerText = data_text[idx].text;
}

setInterval(increment, 15000);