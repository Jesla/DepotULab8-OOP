document.addEventListener("DOMContentLoaded", function () {
    var createDie = document.getElementById('addDie');
    createDie.addEventListener("click", buttonClick1);

function buttonClick1() {
    var divBox = document.createElement("div");
    document.getElementById('mainDiv');
    divBox.className = "dieDesign";
    document.body.appendChild(divBox);
    
    function buttonClick2() {    
    var Die = new Object();
    Die.number=(Math.floor((Math.random() * 6) + 1));
    //tie the new number to the div using innerHTML maybe?
    
}  
}
});

var diceNumber = []; //this has to stay outside and be global


// function(e) {
// e.target.innerHTML = (Math.floor((Math.random() * 6) + 1));

// to loop - use for statement
    
// text.randomNumber

// roll creates a newDie
// merge over old dice
