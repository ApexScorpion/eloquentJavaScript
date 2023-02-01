function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));//only uses first value
// → 16


function minus(a, b) {
    if (b === undefined) {return -a;}
    else return a - b;
    }
    console.log(minus(10));
    // → -10
    console.log(minus(10, 5));
    // → 5


    //no argument 
    function power(base, exponent = 2) {//if not given exponent defaults
        let result = 1;
        for (let count = 0; count < exponent; count++) {
        result *= base;
        }
        return result;
        }
        console.log(power(4));
        // → 16
        console.log(power(2, 6));
        // → 64