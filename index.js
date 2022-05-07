var i;
var noOfButton;
noOfButton = document.querySelectorAll(".drum").length;
for (i = 0; i < noOfButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
  soundKro(this.innerHTML); //for click through mouse
  buttonAnimation(this.innerHTML);
})

}
//var audio= new Audio("sounds/tom-1.mp3");
//audio.play()
document.addEventListener("keydown", function(event) {
                              soundKro(event.key);
                              buttonAnimation(event.key);

                                  })

function soundKro(characterInput) {
  switch (characterInput) {
    case "w":

      var tom = new Audio("sounds/tom-1.mp3");
      tom.play();
      break;

    case "a":
      var tom = new Audio("sounds/tom-2.mp3");
      tom.play();
      break;

    case "s":
      var tom = new Audio("sounds/tom-3.mp3");
      tom.play();
      break;

    case "d":
      var tom = new Audio("sounds/tom-4.mp3");
      tom.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:
      console.log("buttonInnerHTML");

  }

}
function buttonAnimation(currentKey)
 {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  }, 100);



}
