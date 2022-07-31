const nav = document.getElementById("nav")
const button = document.getElementById("button")
const navButtons = document.querySelectorAll(".nav-button")
const main = document.querySelector(".main")

if(window.innerWidth > 480){
    button.addEventListener("click",()=>{
        nav.classList.toggle("active")
    })
}
else{
    button.addEventListener("click",()=>{
        nav.classList.toggle("act")
        main.classList.toggle("blur")
    })
}
navButtons.forEach(navButton=>{
    navButton.addEventListener("click",()=>{
        nav.classList.remove("act")
        main.classList.remove("blur")
    })
})