function Die (number) {
    this.number = number;   
}

var ranNumber = String(Math.floor((Math.random() * 6) + 1));
var diceNumber = new Die (ranNumber);