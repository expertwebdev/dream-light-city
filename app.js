const homeBtn = document.getElementById("home");
const homeContainer = document.getElementById("homeContainer");
const pricingContainer = document.getElementById("pricing");
const menuBar = document.getElementById("menuBar");
const refcodeAlert = document.querySelector("#refcode");
const navBar = document.querySelector("nav");
const refShow = document.querySelector(".refcode-show");
const cardContainer = document.querySelector(".card-container");


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
                    <a href="https://play.google.com/store/apps/details?id=com.alphacorp.alphaplan2"
                        class="btn pricing-btn">${data[i].price}</a>
                </div>`

        cardContainer.appendChild(cardBody);

    }
}

jsonTable("./app.json")


// let active = false;
// menuBar.addEventListener('click', () => {
//     if (active == false) {
//         menuBar.classList.add('open');
//         navBar.style.display = "block"
//         active = true;

//     } else {
//         menuBar.classList.remove('open');
//         navBar.style.display = "none"
//         active = false;
//     }

// })

function getParameter(parameterName) {
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

let showRefcode = getParameter("refcode");

if (getParameter("refcode")) {
    refShow.style.display = "block";
    refcodeAlert.innerHTML = `Your referral code : ${showRefcode}`;
}




