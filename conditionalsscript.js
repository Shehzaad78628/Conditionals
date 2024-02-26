//Part 1
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
//Part 2
let birthYear;
birthYear = prompt("What Year Where You Born?")
birthYear = parseInt(birthYear);
let currentYear = 2024;
let age = currentYear - birthYear;

if (age > 21) {
  alert("You are old enough to drink in the US");
}
else if(age === 21) {
  alert("You are old enough to drink in the US...barely");
}
else {
  alert("Sorry, you are not old enough to drink in the US")
}