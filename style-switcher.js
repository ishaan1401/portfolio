// -----------toggle style switcher------------
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// ------hide style-------------
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})   

// ----------theme colors-------
const  alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else{
            style.removeAttribute("disabled","true");
        }
    })
}
// ----------------theme--------------
const daylight = document.querySelector(".day-night");
daylight.addEventListener("click",() =>{
    daylight.querySelector("i").classList.toggle("fa-sun");
    daylight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        daylight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daylight.querySelector("i").classList.add("fa-moon");
    }
})