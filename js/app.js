
$(document).ready(function(){
	
	var secret = Math.floor(Math.random() * 100 + 1);    //Random number from 1 to 100

/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*--- Start a new game ---*/
  	$(".new").click(function(){
  		secret = Math.floor(Math.random() * 100 + 1);		//Random number from 1 to 100
      $("#count").val(0);
      $("#count").text(0);
      $("#feedback").text("Make your Guess!");
      $("#guessList").empty();
      $("#userGuess").val("");
  	})


/*--- Main function of the game---*/
    $("#form").submit(function(){   //prevent form refresh
      var input = +$("#userGuess").val(); //trasfer from string to number
      var output = feedback(input);
      
      $("#feedback").text(output);

      if (input >= 1 && input <= 100 ) {
        var count = +$("#count").val() + 1;
        $("#count").val(count);
        $("#count").text(count);
        $("#guessList").append('<li>' + input + '</li>');
      }

      console.log(secret);
      console.log(output);
      console.log(count);

      return false;
    })


/*--- Calculate feedback according to user's guess ---*/
  	var feedback = function(guess){
  		var diff = Math.abs(guess - secret);
  		var output;

  		if (guess <= 100 && guess >= 1) {
        if (diff >= 50 && diff < 100) {
          output = "Ice cold";
        }
        else if (diff >= 30 && diff < 50) {
          output = "Cold";
        }
        else if (diff >= 20 && diff < 30) {
          output = "Warm";
        }
        else if (diff >= 10 && diff < 20) {
          output = "Hot";
        }
        else if (diff >= 1 && diff < 10) {
          output = "Very hot";
        }
        else if (diff == 0) {
          output = "Extremely hot";
        }
      }
      else {
        output = "Invalid input";
      }
      
  		return output;
  	}

});


