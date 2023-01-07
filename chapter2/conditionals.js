
//if
if(1+1 == 2){
    console.log(true);
}; 

//if else
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
console.log("Your number is the square root of " +
theNumber * theNumber);
} else {
console.log("Hey. Why didn't you give me a number?");
};


// if else if

let num = Number(prompt("Pick a number"));
if (num < 10) {
console.log("Small");
} else if (num < 100) {
console.log("Medium");
} else {
console.log("Large");
}


//while loop
let number = 0;
while (number <= 12) {
console.log(number);
number = number + 2;
}
// → 0
// → 2
// … etcetera



//do loop
let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


//switch

switch(prompt("what is the weather like")){
    case "rainy":
        console.log("Remember to bring an umbrella.");
    break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
    console.log("Go outside.");
    break;
    default:
        console.log("Unknown weather type!");
    break;
}
switch (expression) {
    case value1:
      //Statements executed when the
      //result of expression matches value1
      break;
    case value2:
      //Statements executed when the
      //result of expression matches value2
      break;
    
    case valueN:
      //Statements executed when the
      //result of expression matches valueN
      break;
    default:
      //Statements executed when none of
      //the values match the value of the expression
      break;
  }

