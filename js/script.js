document.addEventListener("DOMContentLoaded", function(){
    updateService();
});

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
    } else if (operation === "decrement" && counterValue > 0) {
        counterValue--;
    } else if (operation === "decrement" && counterValue <= 0) {
        counterValue = 0;
    }

    // Update the counter element with the new value
    counter.innerText = counterValue.toString();

    updateService(operation);
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

    let total_score = parseInt(player1_score.innerText) + parseInt(player2_score.innerText);

    if (total_score == 0) {
        let rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            player1_action.classList.add("active");
        } else {
            player2_action.classList.add("active");
        }
    }
}

function updateService(operation) {
    let player1_score = document.getElementById("player1-score");
    let player2_score = document.getElementById("player2-score");

    let player1_action = document.getElementById("player1-action");
    let player2_action = document.getElementById("player2-action");

    let total_score = parseInt(player1_score.innerText) + parseInt(player2_score.innerText);

    if ((total_score % 2 == 0) && (operation === "decrement") && (total_score == 0)) {
        return;
    }

    if (total_score == 0) {
        let rand = Math.floor(Math.random() * 2);
        if (rand == 0) {
            player1_action.classList.add("active");
        } else {
            player2_action.classList.add("active");
        }
    }

    let isActive1 = player1_action.classList.contains("active");
    let isActive2 = player2_action.classList.contains("active");

    if ((total_score % 2 == 1) && (operation === "decrement")) {
        if (isActive1) {
            player1_action.classList.remove("active");
            player2_action.classList.add("active");
        } else if (isActive2) {
            player2_action.classList.remove("active");
            player1_action.classList.add("active");
        }
    }

    if ((total_score % 2 == 0) && (operation !== "decrement")) {
        if (isActive1) {
            player1_action.classList.remove("active");
            player2_action.classList.add("active");
        } else if (isActive2) {
            player2_action.classList.remove("active");
            player1_action.classList.add("active");
        }
    }
}