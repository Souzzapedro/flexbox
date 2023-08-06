var containersIndex = document.getElementsByClassName("container");
var containersIndexArray = Array.from(containersIndex);

containersIndexArray.forEach((container) => {
    container.dataset.cardCount = 0;
});


function addCard(container) {
    let cardCount = parseInt(container.dataset.cardCount);
    console.log(cardCount);
    
    let newCard = document.createElement("div");
    cardCount++;
    newCard.textContent = cardCount;
    newCard.className = "filho";
    newCard.classList.add((cardCount % 4 === 1) ? 'a' : (cardCount % 4 === 2) ? 'b' : (cardCount % 4 === 3) ? 'c' : 'd');
    container.appendChild(newCard);
    container.dataset.cardCount = cardCount;
}

function removeCard(container) {
    let cardCount = parseInt(container.dataset.cardCount);
    if (cardCount > 0) {
        container.removeChild(container.lastChild);
        cardCount--;
        container.dataset.cardCount = cardCount;
    }
}

/* Adicionar a todos os containers */
function addCards() {
    containersIndexArray.forEach(container => {
            addCard(container);
    });
}
/* Deletar a todos os containers */
function removeCards() {
    containersIndexArray.forEach(container => {
            removeCard(container);
    });
}


let intervalId;

function startAdding() {
    intervalId = setInterval(() => addCards(), 200); // Chama a função addCard() a cada 100ms
}

function stopAdding() {
    clearInterval(intervalId); // Interrompe a chamada da função addCard()
}

function startRemoving() {
    intervalId = setInterval(() => removeCards(), 200); // Chama a função removeCard() a cada 100ms
}

function stopRemoving() {
    clearInterval(intervalId); // Interrompe a chamada da função removeCard()
}

document.getElementById("mais").addEventListener("click", () => addCards());
document.getElementById("mais").addEventListener("mousedown", () => startAdding());
document.getElementById("mais").addEventListener("mouseup", stopAdding);
document.getElementById("mais").addEventListener("mouseout", stopAdding);

document.getElementById("menos").addEventListener("click", () => removeCards());
document.getElementById("menos").addEventListener("mousedown", () => startRemoving());
document.getElementById("menos").addEventListener("mouseup", stopRemoving);
document.getElementById("menos").addEventListener("mouseout", stopRemoving);

// Adicionar cards inicialmente para todos os containersIndexArray
containersIndexArray.forEach(container => {
    for (let i = 0; i < 4; i++) {
        addCard(container);
    }
});
