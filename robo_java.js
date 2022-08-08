
var PlayerName = window.prompt("What is your robots name?");
var PlayerHealth = 100;
var PlayerAttack = 10;
var Player$ = 10;
//you can log multiple values like this 
console.log (PlayerName, PlayerAttack, PlayerHealth);
var EnemyName = "Roborto";
var EnemyHealth = 50;
var EnemyAttack = 12;

var fight = function() {
    alert("Welcome to Robot Gladiators");
    //other vars used
    var promptfight =  prompt("would you like to Fight or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if (promptfight === "fight" || promptfight === "FIGHT") {


    //subtract the value of 'PlayerAttack' from the value of 'EnemyHealth' and use that result to update the value in the 'EnemyHealth' variable
    EnemyHealth = EnemyHealth - PlayerAttack;
    //log a resulting message to the console so we know that it worked.
    console.log(
        PlayerName + " attacked " + EnemyName + ". " + EnemyName + " now has " + EnemyHealth + " health remaining."
    );
        if (EnemyHealth <= 0) {
            alert(EnemyName + "has died!");
        }
        else {
            alert(EnemyName + " still has " + EnemyHealth + " health left." )
        }

    //subtract the value of 'EnemyAttack' from the value of 'playerHealth' and use that result to update the value in the `playerHealth` variable.
    PlayerHealth = PlayerHealth - EnemyAttack;
    // Log a resulting message to the console so we know that it worked.
     console.log(
        EnemyName + " attacked " + PlayerName + ". " + PlayerName + " now has " + PlayerHealth + " health remaining. "
     );

    if (PlayerHealth <= 0) {
        alert(PlayerName + " has died");

    }

    else { 
        alert(PlayerName + "still has " + PlayerHealth + "health left.");

    }

} else if (promptfight === "skip" || promptfight === "SKIP") { //player doesnt want to fight 

    var ConfirmSkip = window.confirm("are you sure you would like to quit?"); //instead  of prompt it ask yes or no question
    
    // if yes (true), leave fight
    if (ConfirmSkip) {

        window.alert(PlayerName + " has decided to skip this fight. Goodbye!");
 
   // subtract money from playerMoney for skipping
        Player$ = Player$ - 2;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
  }
}



 else {
    window.alert("you need to choose a valid option. Try again!");
}

};


fight();


 

