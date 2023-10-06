var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
userClickedPattern = [];
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
});

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  
}


