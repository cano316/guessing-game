let maximum = parseInt(prompt("Enter your max number"));
while (!maximum) { //this is saying while maximum has a value that is NaN, this is falsey, so run this code
    maximum = parseInt(prompt("Please enter a valid value"));
}
const ranNum = Math.floor(Math.random() * maximum) + 1;
console.log(ranNum);

let guess = parseInt(prompt("Enter your first guess"));
let guesses = 1;

while (parseInt(guess) !== ranNum) {
    if (guess === 'q') {
        break;//this quits the program
    }
    guesses++;
    if (guess < ranNum) {
        alert("That number is too low");
    } else {
        alert("That number is too high");
    }
    guess = prompt("Enter a new number");
}
if (guess === 'q') {
    console.log('We do not blame you for quitting!');
} else {
    alert(`Congrats, the number was ${ranNum}. It only took you ${guesses} guesses.`)
}