const cardSuits = ["♦", "♥", "♠", "♣"]
const cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

let upperSuitContainer = document.querySelector("#cardSuitUpper")
let lowerSuitContainer = document.querySelector("#cardSuitLower")
let valueContainer = document.querySelector("#cardValue")
let cardBody = document.querySelector("#cardBody")
let form = document.querySelector("#sizingForm")
let cardBodyStyles = getComputedStyle(cardBody)

const generateCard = () => {
    let randomSuit = Math.floor(Math.random()*4);
    let randomValue = Math.floor(Math.random()*13);
    let generatedCard = {
        suit: cardSuits[randomSuit],
        value: cardValue[randomValue]
    };
    if (generatedCard.suit === "♦" || generatedCard.suit === "♥"){
        upperSuitContainer.style.color="red";
        lowerSuitContainer.style.color="red";
    }else{
    upperSuitContainer.style.color="black";
    lowerSuitContainer.style.color="black";}
    upperSuitContainer.innerText = generatedCard.suit;
    lowerSuitContainer.innerText = generatedCard.suit;
    valueContainer.innerText = generatedCard.value;
}

let countdownTimer = setInterval(generateCard, 10000)
const countdown = () =>{
    countdownTimer = setInterval(generateCard, 10000)
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    let cardHeight = formData.get("height")+"px";
    let cardWidth = formData.get("width")+"px";
    cardBody.style.height=cardHeight;
    cardBody.style.width=cardWidth;
})
