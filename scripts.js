var addDie = function() {
        var dieDesign = document.getElementById("mainDiv");
        var divBox = document.createElement("div");
        divBox.className = "dieDesign";
        dieDesign.appendChild(divBox);
}

var rollDice = function() {
        var diceNumber = document.getElementsByClassName("dieDesign");
        var ranNumber = String(Math.floor((Math.random() * 6) + 1));
        diceNumber.appendChild(ranNumber); //invalid. Can't appendChild in this case
}
