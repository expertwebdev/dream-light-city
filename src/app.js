const pricingBtn = document.getElementById("pricing");
const homeBtn = document.getElementById("home");
const homeContainer = document.getElementById("homeContainer");
const pricingContainer = document.getElementById("pricingContainer");
const menuBar = document.getElementById("menuBar");
const navBar = document.querySelector("nav")



pricingBtn.addEventListener('click', ()=>{
    homeContainer.style.display = "none";
    pricingContainer.style.display = "flex";
})

homeBtn.addEventListener('click', ()=>{
    homeContainer.style.display = "flex";
    pricingContainer.style.display = "none";
})

let active = false;
menuBar.addEventListener('click', () => {
    if (active == false) {
        menuBar.classList.add('open');
        navBar.style.display = "block"
        active = true;

    } else {
        menuBar.classList.remove('open');
        navBar.style.display = "none"
        active = false;
    }

})