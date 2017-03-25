var bigMathProblem2 = function() {
var enteredNumber = prompt("Please enter a number no higher than 4,000,000.");
while (isNaN(enteredNumber) || enteredNumber > 4000000){
  enteredNumber = prompt("That entry is invalid, please provide a number no higher than 4,000,000.");
}
var goodNumbers = [];
var finalAnswer = 0;
var x = 1;
while (x <= enteredNumber) {
  if (x % 2 === 0) {
    goodNumbers.push(x);
    x += x;
  } else {
  x += x;
  }
}
for (i = 0; i < goodNumbers.length; i++) {
  finalAnswer += goodNumbers[i];
}
console.log(finalAnswer);
};
bigMathProblem2();
