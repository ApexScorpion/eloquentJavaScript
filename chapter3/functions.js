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
if (safeMode) {
    launchMissiles = function() {/* do nothing */};
}
    