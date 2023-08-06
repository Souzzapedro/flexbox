let mais = document.getElementById("mais");
let menos = document.getElementById("menos");

let cards = document.querySelector(".cards");

for(let i = 0; i < 10; i++) {
    addCard();
}

var cardCount = 10; // Iniciar com 4 cards
let intervalId; // Variável para armazenar o ID do intervalo

function addCard() {
    let newCard = document.createElement("div");
    newCard.className = "card";
    cards.appendChild(newCard);
    cardCount++;
}

function removeCard() {
    if (cardCount > 0) { 
        cards.removeChild(cards.lastChild);
        cardCount--;
    }
}

function startAdding() {
    intervalId = setInterval(addCard, 100); // Chama a função addCard() a cada 100ms
}

function stopAdding() {
    clearInterval(intervalId); // Interrompe a chamada da função addCard()
}

function startRemoving() {
    intervalId = setInterval(removeCard, 100); // Chama a função removeCard() a cada 100ms
}

function stopRemoving() {
    clearInterval(intervalId); // Interrompe a chamada da função removeCard()
}

mais.addEventListener("click", addCard);
mais.addEventListener("mousedown", startAdding);
mais.addEventListener("mouseup", stopAdding);
mais.addEventListener("mouseout", stopAdding); // Caso o mouse saia do botão enquanto pressionado

menos.addEventListener("click", removeCard);
menos.addEventListener("mousedown", startRemoving);
menos.addEventListener("mouseup", stopRemoving);
menos.addEventListener("mouseout", stopRemoving); // Caso o mouse saia do botão enquanto pressionado

