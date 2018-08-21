
$(document).ready(function () {

    // The hidden value of each crystal (initialized to 0)
    var value1 = 0;
    var value2 = 0;
    var value3 = 0;
    var value4 = 0;

    // The random number picked by the computer to which the user's clicks 
    // must add up (initialized to 0)
    var randomSum = 0;

    // The current sum of the values of the crytals clicked on by the user
    var sum = 0;

    // The number of wins and losses over the course of playing the game
    var wins = 0;
    var losses = 0;

    function setUpGame() {
        sum = 0;

        value1 = pickAValue();
        value2 = pickAValue();

        // Ensure that the value of the second crytal differs from the value of 
        // the first crystal
        // (Keep picking a random value until the computer picks one that is not 
        // the same as the first value)
        while (value2 === value1) {
            value2 = pickAValue();
        }

        value3 = pickAValue();

        // Ensure that the value of the third crytal differs from the values of 
        // the first and second crystals
        while ((value3 === value1) || (value3 === value2)) {
            value3 = pickAValue();
        }

        value4 = pickAValue();

        // Ensure that the value of the third crytal differs from the values of 
        // the first and second crystals
        while ((value4 === value1) || (value4 === value2) || (value4 === value3)) {
            value4 = pickAValue();
        }

        randomSum = pickARandomNumber();

        // Display the random number selected by the computer on the page
        $('#random-number').html(randomSum);

        // Display the current total score (currently set to 0)
        $('#current-total').html(sum);

        // Print statements for testing
        console.log(value1);
        console.log(value2);
        console.log(value3);
        console.log(value4);
        console.log(randomSum);
    }

    setUpGame();

    $('.crystal').on("click", function() {
        // Determine which image in the class 'crystal' was clicked on and 
        // add the value of the corresponding crystal to the current sum
        if (parseInt($(this).attr('value')) === 1) {
            sum += value1;
        }
        else if (parseInt($(this).attr('value')) === 2) {
            sum += value2;
        }
        else if (parseInt($(this).attr('value')) === 3) {
            sum += value3;
        }
        else if (parseInt($(this).attr('value')) === 4) {
            sum += value4;
        }

        // If the current sum matches the original random number picked 
        // by the computer, then record this game as a win and start a 
        // new game -- if the current sum is greater than the random number, 
        // then record this game as a loss and start a new game -- if the 
        // current sum is less than the random number, then continue playing 
        // this game
        if (sum === randomSum) {
            wins++;
            $('#wins').html(wins);
            $('#message').html("You won!!");
            setUpGame();
        }
        else if (sum > randomSum) {
            losses++;
            $('#losses').html(losses);
            $('#message').html("You lost!!");
            setUpGame();
        }
        else {
            $('#message').html("Keep playing!!");
        }

        // Display the current total score on the page
        $('#current-total').html(sum);
    });
});

// Have the computer pick a number between 1 and 12
// (Generate a number between 0 inclusive and 12 exclusive, then add 1)
function pickAValue() {
    var n = Math.floor(Math.random() * 12) + 1;
    return n;
}

// Have the computer pick a number between 19 and 120
// (Generate a number between 0 inclusive and 102 exclusive, then add 19)
function pickARandomNumber() {
    var n = Math.floor(Math.random() * 102) + 19;
    return n;
}
