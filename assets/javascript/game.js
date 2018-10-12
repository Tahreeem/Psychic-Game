
    $(document).ready(function () {

            var alphabet = "abcdefghijklmnopqrstuvwxyz";

    var random = Math.floor(Math.random() * alphabet.length) + 1;
    random = alphabet[random];

    var wins_div = $("div.content div:nth-child(1) span");
    var losses_div = $("div.content div:nth-child(2) span");
    var guesses_left_div = $("div.content div:nth-child(3) span");
    var guesses_sofar_div = $("div.content div:nth-child(4) span");

    var counter_wins = 0;
    var counter_losses = 0;
    var counter_guesses_left = 9;
    var counter_guesses_sofar = 0;


            $(document).keypress(function (event) {

                var keypressed = String.fromCharCode(event.which);

                if (keypressed != "" && isNaN(keypressed) == true && counter_guesses_left != 0) {

        counter_guesses_sofar++;

    //________________________________________________________
    if (guesses_sofar_div.text().length == 0) {
        guesses_sofar_div.append(keypressed);
    }
    else guesses_sofar_div.append("," + keypressed);
    //________________________________________________________
                    if (keypressed == random) {
        counter_wins++;
    wins_div.text(counter_wins);
    guesses_sofar_div.empty();
    counter_guesses_left = 9;
    counter_guesses_sofar = 0;

    random = Math.floor(Math.random() * alphabet.length) + 1;
    random = alphabet[random];
}
else counter_guesses_left--;
//________________________________________________________

guesses_left_div.text(counter_guesses_left);

//________________________________________________________
                    if (counter_guesses_left == 0) {

                        if (keypressed != random) {
        counter_losses++;
    losses_div.text(counter_losses);
}

guesses_sofar_div.empty();
counter_guesses_sofar = 0;
counter_guesses_left = 9;
guesses_left_div.text(counter_guesses_left);
random = Math.floor(Math.random() * alphabet.length) + 1;
random = alphabet[random];
}
//________________________________________________________

}

//console.log(random);
//console.log("key pressed:" + keypressed);

});


});