const refcodeAlert = document.querySelector("#refcode");
const navBar = document.querySelector("nav");
const refShow = document.querySelector(".refcode-show");
const cardContainer = document.querySelector(".card-container");
const menuBar = document.getElementById("menuBar");
const dropItem = document.getElementById("dropItem");
const downloadBtn = document.getElementById("download_btn");

downloadBtn.addEventListener("click", ()=>{
    location.href="https://play.google.com/store/apps/details?id=com.ecopower.dreamlightcity";
})

async function jsonTable(url) {
    const response = await fetch(url);
    const data = await response.json();

    for (let i in data) {
        let cardBody = document.createElement("div");
        cardBody.className = "card";

        cardBody.innerHTML = `
        <label class="card-tittle">${data[i].planNames}</label>
                <img class="cardImage" src="${data[i].imageLink}">
                <div class="card-body">
                    <p>price: ${data[i].price}</p>
                    <p>daily income: ₹${data[i].dailyIncome}</p>
                    <p>full income: ${data[i].totalIncome}</p>
                    <p>serving Days: ${data[i].servingDays}D</p>
                </div>
                <div class="card-btn">
                    <a href="https://play.google.com/store/apps/details?id=com.ecopower.dreamlightcity"
                        class="btn pricing-btn">${data[i].price}</a>
                </div>`

        cardContainer.appendChild(cardBody);

    }
};

jsonTable("./src/json/card.json");


function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

let showRefcode = getParameter("refcode");

if (getParameter("refcode")) {
    refShow.style.display = "block";
    refcodeAlert.innerHTML = `Your referral code : ${showRefcode}`;
}

let isNav = true;
function dropDown(){
    if(isNav){
        menuBar.classList.add("rotate90Deg");
        dropItem.classList.add("showNav");
        isNav = false;
    }
    else {
        menuBar.classList.remove("rotate90Deg");
        dropItem.classList.remove("showNav");
        isNav = true;
    }
}




