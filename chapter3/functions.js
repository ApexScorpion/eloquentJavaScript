//declaration of function
const makeNoise = function(){
    console.log("pling")
};//end with;
makeNoise();

const power = function(base, exponent){//(parameters are internal variables)
    let result = 1;
    for(let count = 0; count< exponent; count++){
        result *= base;
    }
    return result;
}
console.log(power(2,10));
//1024

//changing value
let launchMissiles = function() {
        missileSystem.launch("now");
};
if (true) {
    launchMissiles = function() {/* do nothing */};
}
//growingFunction
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
    }
    printFarmInventory(7, 11);