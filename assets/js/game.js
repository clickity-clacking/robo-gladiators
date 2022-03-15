var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Function expression: This is when we create a function by assigning it to a variable instead of declaring it with the word function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or  SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT"|| promptFight === "Fight") {
        //remove enemy's health by subtracting attack
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName = " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack var
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's healtj
        if (playerHealth <=0) {
            window.alert(playerName = " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!")
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight()
        else {
            fight();
        }

    } else {
        window.alert("Please input a valid selection")
    }
};

fight();