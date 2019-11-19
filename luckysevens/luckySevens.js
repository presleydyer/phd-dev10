function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playBet(startingBet) {
    var rolls = 0;
    var highestRoll = 0;
    var mostMoney = startingBet;
    var sum = 0;
    while(startingBet > 0) {
        sum += (rollDice() + rollDice());
        rolls++;
        if(sum === 7) {
            startingBet += 4;
        } else {
            startingBet -= 1;
        }
        if(startingBet > mostMoney) {
            mostMoney = startingBet;
            highestRoll = rolls;
        }
        sum = 0;
    }

    var results = [];
    results[0] = rolls;
    results[1] = mostMoney;
    results[2] = highestRoll;

    return results;
}

function validateItems() {
    var betNum = document.forms["betForm"]["bet"].value;
    if (betNum == "" || isNaN(betNum) || betNum < 0) {
        alert("Starting bet must be a number greater than 0.");
        document.forms["betForm"]["bet"].focus();
        return false;
    }

    var resultsArray = playBet(betNum);

    document.forms["betForm"]["bet"].value = "";
    document.forms["betForm"]["bet"].focus();
    document.getElementById("resultsSection").style.display = "block";
    document.getElementById("startingBet").innerText = betNum;
    document.getElementById("rollsBeforeBroke").innerText = resultsArray[0];
    document.getElementById("highestWon").innerText = resultsArray[1];
    document.getElementById("rollsAtHighestWon").innerText = resultsArray[2];
    
    return false;
}