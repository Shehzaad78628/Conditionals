// alert ("You guessed right! The coin flip landed on [YOUR CHOICE HERE]")
// alert ("Sorry, the coin flip landed on [NOT YOUR CHOICE HERE]")
let userChoice, randomNumber, computerChoice;

userChoice = prompt("heads or tails?");

randomNumber = Math.floor(Math.random() * 2);

if (randomNumber === 0) {
  computerChoice = "heads";
}
else {
  computerChoice = "tails";
}

if (userChoice.toLowerCase() === computerChoice) {
  alert("You guessed right! The coin flip landed on" +" "+ userChoice);
}
else{
  alert("Sorry, the coin flip landed on" +" "+ computerChoice);
}