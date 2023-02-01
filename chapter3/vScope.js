let x = 10;
if (true) {
    let y = 20;
    var z = 30;//var is always global
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
// → 40

const halve = function(n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
    
//nested
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
        unit += "s";
    }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
    };