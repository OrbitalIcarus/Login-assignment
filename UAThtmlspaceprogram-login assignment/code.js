function playCraps() {
    //Troubleshooting playscraps() has started
    
    //The console log informs me of anything that happens while i run the code. This one is to let me know that craps has started.
    console.log("playCraps() started");
   
    // Im defining my dice here with variables and setting it to 0 as a starting reference number.
    var die1 = 0;
    var die2 = 0;
    
    // A few things are happening here. 
    // 1. I am informing my dice to roll a random number
    // 2. The 6 is indicating how high i want the potential number to roll
    // 3. The math ceiling helps me round my numbers 
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());

    // more console logs on what is happening with my dice and the number they rolled.
    console.log(die1);
    console.log(die2);

    //Here is where we are grabbing the values from both dice in order to display them
    document.getElementById("die1Res").innerhtml = "The result for die1 is: " + die1;
    document.getElementById("die2Res").innerhtml = "The result for die2 is: " + die2;

    //check if craps (7 or 11)
    // We are checking for the sum from the two dice.
    var sum = die1 + die2;
    // Here we are indicating what to do if the value is either a 7 or 11.
    if(sum == 7 || sum == 11){
        //once again the console is informing me of results
        console.log("you lose!!!!!!!");
        //This line tells the player if there result is a loss.
        document.getElementById("gameRes").innerHTML = "Better luck next time. Try again?";
    }

    //check for win (even doubles)
    // Here we are indicating a seperate scenario in the case the values end up succeding.
    else if(die1 % 2 == 0 && die1 == die2){
        // displaying the win to me in the console
        console.log("you win!!!!!")
        // displaying the win to the person playing
        document.getElementById("gameRes").innerHTML = "Nice job! You win!";
 }

    //check for tie
    //the final option stated that may occur
    else{
        //informing me through the console of this state in the game.
        console.log("You did not win or lose.")
        //Lastly displaying this game state to the person playing.
        document.getElementById("gameRes").innerHTML = "You did not win or lose.";
    }
    //Assignment: Efficency at Mission Control
    function btrCountdownTimer(){
        console.log("btrCountdownTimer() started");
        var currTime = 50;

        for(var i = 0; i < 11; i = i++){
            setTimeout(function(){
                //what we do each iteration
                console.log(currTime);
                document.getElementById("countDis").innerHTML = currTime;
                if(currTime == 0){
                    document.getElementById("countDis").innerHTML = "Blastoff!!!";
                }
                currTime = currTime - 5;
            },i * 5000)
        }


} 
}