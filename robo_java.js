//3.3.6
var PlayerName = window.prompt("What is your robots name?");
var PlayerHealth = 100;
var PlayerAttack = 10;
var Player$ = 10;
//you can log multiple values like this 
console.log (PlayerName, PlayerAttack, PlayerHealth);
//enemies
var EnemyNames = ["Roborto" , "Amy Andriod" , "Robo Trumble"];  
var EnemyHealth = 50;
var EnemyAttack = 12;

console.log(EnemyNames);
console.log(Math.random);


//shop function
var shop = function() {
    var ShopOptions = window.prompt(
        "Would you like refill your HEALTH, upgrade your ATTACK, or LEAVE the store? Please enter one: 'HEALTH', 'ATTACK', or 'LEAVE' to make a choice."
        );
//using a switch function instead of if 
    switch (ShopOptions) {
        case "HEALTH":
        case "health":
            if (Player$ > 7){//so that you cant buy stuff unless you have enough money
            window.alert("Refilling player's health by 20 for 7 dollars.");
            PlayerHealth = PlayerHealth + 20;
            Player$ = Player$ - 7;
            }

            else {
                alert("you're too broke")
            }

            break;

        case "ATTACK":
        case "attack":
            if (Player$ > 7){
            window.alert("Upgrading player ATTACK by 6 for 7 dollars.");
            PlayerAttack = PlayerAttack + 6;
            Player$ = Player$ - 7;
            }
            else {
                alert("you're too broke")
            }
            
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
        
            break;
            
        default:
            window.alert("please choose a valid option");
        //call shop () again to force player to chose a valid option
        shop();
        break;
    }
    };




var Rnum = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};




var fight = function(EnemyNames) { //fight function
    
    var promptfight =  prompt("would you like to Fight or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");//fight or no

    while(EnemyHealth > 0 && PlayerHealth > 0) {


if (promptfight === "fight" || promptfight === "FIGHT") {     
    //subtract the value of 'PlayerAttack' from the value of 'EnemyHealth' and use that result to update the value in the 'EnemyHealth' variable
    var Damage = Rnum(PlayerAttack - 3, PlayerAttack);

    EnemyHealth = Math.max(0, EnemyHealth - Damage);
    //log a resulting message to the console so we know that it worked.
    console.log(
        PlayerName + " attacked " + EnemyNames + ". " + EnemyNames + " now has " + EnemyHealth + " health remaining."
    );
        if (EnemyHealth <= 0) {
            alert(EnemyNames + " has died!");
            break;
        }
        else {
            alert(EnemyNames + " still has " + EnemyHealth + " health left." );
        }


    //subtract the value of 'EnemyAttack' from the value of 'playerHealth' and use that result to update the value in the `playerHealth` variable.
    var Damage = Rnum(EnemyAttack -3, EnemyAttack);

    PlayerHealth = Math.max(0, PlayerHealth - Damage);
    // Log a resulting message to the console so we know that it worked.
     console.log(
        EnemyNames + " attacked " + PlayerName + ". " + PlayerName + " now has " + PlayerHealth + " health remaining. "
     );

    if (PlayerHealth <= 0) {
        alert(PlayerName + " HAS DIED!");
        break;
    }

    else { 
        alert(PlayerName + " still has " + PlayerHealth + " health left.");

    }
} 

//this is fot the skip fight

else if (promptfight === "skip" || promptfight === "SKIP") { //player doesnt want to fight 

    var ConfirmSkip = window.confirm("are you sure you would like to quit?"); //instead  of prompt it ask yes or no question    
    // if yes (true), leave fight
    if (ConfirmSkip) {

        window.alert(PlayerName + " has decided to skip this fight. Goodbye!");
 
   // subtract money from playerMoney for skipping
        Player$ = Math.max(0, Player$ - 10);
        Console.log("Player Money: $" , Player$);
        break;
      }
      // if no (false), ask question again by running fight() again
      else {
        fight();
  }
}

else {
    window.alert("you need to choose a valid option. Try again!");
    fight();
    }

}
};//end of function



var StartGame = function(){ //starting the game
for(var i = 0; i < EnemyNames.length; i++) {

    if(PlayerHealth > 0) {
    alert("welcome to robot gladiators! round " + (i + 1));
    // pick new enemy to fight based on the index of the enemynames array 
    var PickedEnemyName = EnemyNames[i];

    //reset enemy health before  starting a new fight
    EnemyHealth = Rnum(40,60);//this is setting the min and max in the function
                                                                                                         //if (PlayerHealth > 0 && i < EnemyNames - 1) {   //got to shop after defeating every enemy      /dont think i need this code but gonna keep it just incase    
    var ShopConfirm = window.confirm("The fight is over, visit the store before the next round?");
    if (ShopConfirm) {
        shop();
 }                                                                                                                          //}
 fight(PickedEnemyName);

}   else {
        alert("you have lost your robot in battle! GAME OVER!");
        break;
        }

};//ends for loop

//resets player stats
PlayerHealth = 100;
PlayerAttack = 10;
Player$ = 10;

//reruns game
EndGame();
};


var EndGame = function(){ //ends the game
    if (PlayerHealth > 0) {
        alert("great job, you've survived the game! you now have a score of " + Player$ + ".");

    }

    else {
        alert( "You've lost your robot in battle.");
    }
    //playagain confirmation
    var PlayAgain = window.confirm("would you like to play again ?")

    if(PlayAgain) {
        StartGame();
    }

    else{
        alert("Thank You for playing Robot Gladiators! Come back soon!")
    }

};

//starts game
StartGame();

