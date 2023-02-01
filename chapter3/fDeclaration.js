//function declaration
function square(x) {
    return x * x;
}
//as variable
let say = function(message){
    console.log(message)
}
//changing value
square = function(){

}

function wrapValue(n) {
    let local = n;
    return () => local;
    }
    47
    let wrap1 = wrapValue(1);
    let wrap2 = wrapValue(2);
    console.log(wrap1());
    // → 1
    console.log(wrap2());
    // → 2

    function multiplier(factor) {
        return number => number * factor;
    }
    let twice = multiplier(2);
    console.log(twice(5));
    // → 10

//arrow
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
        return result;
    };


    //recursion 
    function power(base, exponent) {
        if (exponent == 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }
    console.log(power(2, 3));
        // → 8
    