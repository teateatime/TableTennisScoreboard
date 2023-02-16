function changeCounter(operation, player) {
    // Get the counter element
    let counter = 0;
    if (player === "player1") {
        counter = document.getElementById("player1-score");
    } else if (player === "player2") {
        counter = document.getElementById("player2-score")
    }
    // Get the current value of the counter element
    let counterValue = parseInt(counter.innerText);

    // Increment or decrement the counter value depending on the operation
    if (operation === "increment") {
        counterValue++;
    } else if (operation === "decrement") {
        counterValue--;
    }

    // Update the counter element with the new value
    counter.innerText = counterValue.toString();
}

function newGame() {
    let zero = 0;
    let player1_score = document.getElementById("player1-score");
    let player2_score = document.getElementById("player2-score");
    let player1_name = document.getElementById("name1");
    let player2_name = document.getElementById("name2");
    let player1_action = document.getElementById("player1-action");
    let player2_action = document.getElementById("player2-action");

    player1_score.innerText = zero.toString();
    player2_score.innerText = zero.toString();
    player1_name.value = "";
    player2_name.value = "";
    player1_action.classList.remove("active");
    player2_action.classList.remove("active");
}

function toggleService(player) {
    let player1_action = document.getElementById("player1-action");
    let player2_action = document.getElementById("player2-action");

    let isActive1 = player1_action.classList.contains("active");
    let isActive2 = player2_action.classList.contains("active");

    if (player === "player1" && !isActive1 && !isActive2) {
        player1_action.classList.add("active");
    } else if (player === "player1" && isActive1 && !isActive2) {
        player1_action.classList.remove("active");
    } else if (player === "player1" && !isActive1 && isActive2) {
        player1_action.classList.add("active");
        player2_action.classList.remove("active");
    } else if (player === "player1" && isActive1 && isActive2) {
        player1_action.classList.remove("active");
    } else if (player === "player2" && !isActive1 && !isActive2) {
        player2_action.classList.add("active");
    } else if (player === "player2" && isActive1 && !isActive2) {
        player1_action.classList.remove("active");
        player2_action.classList.add("active");
    } else if (player === "player2" && !isActive1 && isActive2) {
        player2_action.classList.remove("active");
    } else if (player === "player2" && isActive1 && isActive2) {
        player2_action.classList.remove("active");
    }
}

// function updateService(score) {

// }