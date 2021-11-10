// GAME STATES
// "WIN" - PLAYER ROBOT HAS DEFEATED ALL ENEMY-ROBOTS
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "Lose" - Player robot's health is zero or less

// VAR PLAYER NAME IS THE RESULT OF THE PROMPT FUNCTION
var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames, enemyAttack, enemyHealth);

// create function
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //PROMPT ASKING TO FIGHT OR NOT
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
  
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + " has chosen to skip the fight!");
        // CONFIRM PLAYER WANTS TO SKIP
        var confirmSkip = window.confirm("Are you sure you'd like to skip?")

        //IF YES (TRUE), LEAVE FIGHT
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight.")
            //SUBTRACT MONEY FROM PLAYER FOR SKIPPING
            playerMoney = playerMoney - 2
            console.log(
                playerName + playerAttack + playerHealth + playerMoney
            );
        }
        //IF NO (FALSE), ASK QUESTION AGAIN BY RUNNING FIGHT()
        else{
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
        fight();
    }
  };

// execute function
// for loop with the variable i starting at 0, as long as i is less than enemyNames length, for i + 1 times.
// enemyNames[i] is the argument that causes the fight function to call multiple times.

for(var i=0; i < enemyNames.length; i++) {
    fight(enemyNames[i])
}