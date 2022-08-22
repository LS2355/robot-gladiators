//the annoying ass thing that kept asking if i wanted ro fight or skip after every attack is on the teachers final product so im done with this project thats all i needed

var GetPlayerName = function() {
    var name = "";
    console.log("Your robot's name is "+ name);

while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
}

    return name;
};



var PlayerInfo = {
 Name: GetPlayerName(),
 Health: 100,
 Attack: 10,
 Money: 10,
 reset: function() {
    this.Health = 100;
    this.Money = 10;
    this.Attack = 10;
 },
 RefillHealth: function() {
    if (this.Money >= 7) {
    alert("Refilling player's health by 20 for 7 dollars.");
    this.Health += 20;
    this.Money -= 7;
 }
    else {
        alert("You're too broke!");
    }
},
 UpgradeAttack: function() {
    if (this.Money >= 7) {
    alert("Upgrading player's attack by 6 for 7 dollars.")
    this.Attack += 6;
    this.Money -= 7;
     }
     
     else {
        alert("You're too broke!");
    }
 }
};
//gets player name





//shop function
var shop = function() {
    var ShopOptions = window.prompt(
        "Would you like refill your HEALTH, upgrade your ATTACK, or LEAVE the store? Please enter 1 = HEALTH, 2 = ATTACK, or 3 = LEAVE"
        );
        //turning string to int
        ShopOptions = parseInt(ShopOptions);


//using a switch function instead of if 
    switch (ShopOptions) {
        case 1:
            PlayerInfo.RefillHealth();
            break;

        case 2:
            PlayerInfo.UpgradeAttack();            
            break;

        case 3:

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




//enemies
var EnemyInfo = [
    {Name: "Roborto",
    Attack: Rnum(10, 14)},
    
    {Name: "Amy Andriod",
    Attack: Rnum(10, 14)},

    {Name: "Robo Trumble",
    Attack: Rnum(10, 14)}

];



var FightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var PromptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // Enter the conditional recursive function call here!
    if (PromptFight === "" || PromptFight === null) {
        alert("You need to provide a valid answer! Please try again");
        return FightOrSkip();
    }
 
    PromptFight = PromptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (PromptFight === "skip"); {
      // confirm player wants to skip
      var ConfirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (ConfirmSkip) {
        alert(playerInfo.Name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        PlayerInfo.Money = Math.max(0, PlayerInfo.Money - 10);
        return true;
        
      }
    }
    return false;
  };




var fight = function(Enemy) { //fight function
          
    while(Enemy.Health > 0 && PlayerInfo.Health > 0) {
         if (FightOrSkip()) {
            break;
        }
        
    
    //subtract the value of 'PlayerAttack' from the value of 'Enemy.Health' and use that result to update the value in the 'Enemy.Health' variable
    var Damage = Rnum(PlayerInfo.Attack - 3, PlayerInfo.Attack);

    Enemy.Health = Math.max(0, Enemy.Health - Damage);
    //log a resulting message to the console so we know that it worked.
    console.log(
        PlayerInfo.Name + " attacked " + Enemy.Name + ". " + Enemy.Name + " now has " + Enemy.Health + " health remaining."
    );
        if (Enemy.Health <= 0) {
            alert(Enemy.Name + " has died!");
            break;
        }
        else {
            alert(Enemy.Name + " still has " + Enemy.Health + " health left." );
        }


    //subtract the value of 'Enemy.Attack' from the value of 'PlayerInfo.Health' and use that result to update the value in the `PlayerInfo.Health` variable.
    var Damage = Rnum(Enemy.Attack -3, Enemy.Attack);

    PlayerInfo.Health = Math.max(0, PlayerInfo.Health - Damage);
    // Log a resulting message to the console so we know that it worked.
     console.log(
        Enemy.Name + " attacked " + PlayerInfo.Name + ". " + PlayerInfo.Name + " now has " + PlayerInfo.Health + " health remaining. "
     );

    if (PlayerInfo.Health <= 0) {
        alert(PlayerInfo.Name + " HAS DIED!");
        break;
    }

    else { 
        alert(PlayerInfo.Name + " still has " + PlayerInfo.Health + " health left.");

    }

}
};//end of function



var StartGame = function(){ //starting the game
 debugger;
    PlayerInfo.reset();

for(var i = 0; i < EnemyInfo.length; i++) {

    if(PlayerInfo.Health > 0) {
    alert("welcome to robot gladiators! round " + (i + 1));
    // pick new enemy to fight based on the index of the Enemy.Name array 
    var PickedEnemyObj = EnemyInfo[i];

    //reset enemy health before  starting a new fight
    PickedEnemyObj.Health = Rnum(40,60);//this is setting the min and max in the function
                                                                                                         //if (PlayerInfo.Health > 0 && i < Enemy.Name - 1) {   //got to shop after defeating every enemy      /dont think i need this code but gonna keep it just incase    
    var ShopConfirm = window.confirm("The fight is over, visit the store before the next round?");
    if (ShopConfirm) {
        shop();
 }                                                                                                                          //}
 fight(PickedEnemyObj);

}   else {
        alert("you have lost your robot in battle! GAME OVER!");
        break;
        }

};//ends for loop

//resets player stats
PlayerInfo.Health = 100;
PlayerInfo.Attack = 10;
PlayerInfo.Money = 10;

//reruns game
EndGame();
};


var EndGame = function(){ //ends the game
    if (PlayerInfo.Health > 0) {
        alert("great job, you've survived the game! you now have a score of " + PlayerInfo.Money + ".");

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

//is this shit working
