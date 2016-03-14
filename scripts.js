var Die = function () {
    this.value = null;
    this.div = null;
    this.insert = function () {
        this.div = document.createElement("div");
        this.div.className = "dieDesign";
        this.roll();
        document.getElementById('mainDiv').appendChild(this.div);
    }
    this.roll = function () {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerHTML = num;
    }
}
var dice = [];


function addDie() {
    var dieDesign = new Die();
    var someDiv = document.createElement("div");
    someDiv.className = "dieDesign";
    dieDesign.div = someDiv;
    dieDesign.roll();
    document.getElementById('mainDiv').appendChild(someDiv);
    dice.push(dieDesign);
}

function rollDice() {
    for (var i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
}

function sumDice() {
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        sum += dice[i].value
    }
    alert("The sum of the dice is " + sum + ".");
}