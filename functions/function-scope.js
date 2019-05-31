// Global scope (convertFarenheitToCelsius, temp1, temp2)
    // Local scope (tempFarenheit, celsius)
        // Local scope (isFreezing)


// Functions parameters are bound to the new local scope created by the function
let convertFarenheitToCelsius = function(tempFarenheit) {
    let celsius = ((tempFarenheit - 32) * 5) / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }
    return celsius;
};

let temp1 = convertFarenheitToCelsius(32);
let temp2 = convertFarenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
