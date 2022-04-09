const pricingBtn = document.getElementById("pricing");
const homeBtn = document.getElementById("home");
const homeContainer = document.getElementById("homeContainer");
const pricingContainer = document.getElementById("pricingContainer");
const menuBar = document.getElementById("menuBar");
const refcodeAlert = document.querySelector("#refcode");
const navBar = document.querySelector("nav");
const refShow = document.querySelector(".refcode-show");



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

function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

let showRefcode = getParameter("refcode");

if (getParameter("refcode")) {
    refShow.style.display = "block";
    refcodeAlert.innerHTML = `Your referral code : ${showRefcode}`;
} 