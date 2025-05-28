var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
var toFromInput = inputs.item(0);
var detailsInput = inputs.item(1);
var handleDetailsInputEvent = function (event) {
    var detailsValue = "DETAILS_" + toFromInput.value;
    detailsInput.value = detailsValue;
    console.log(toFromInput.value);
};
toFromInput.addEventListener("input", handleDetailsInputEvent);
var adder = function (a, b) {
    return a + b;
};
var minuser = function (a, b) {
    return a - b * a;
};
console.log(adder(1, 2));
console.log(minuser(1, 2));
var performSomeMaths = function (a, b, mathsDoer) {
    return mathsDoer(a, b);
};
console.log(performSomeMaths(10, 8, adder));
console.log(performSomeMaths(10, 8, minuser));
var performSomeMathsOnPositiveNumbers = function (a, b, mathsDoer) {
    var positiveA = Math.abs(a);
    var positiveB = Math.abs(b);
    return mathsDoer(positiveA, positiveB);
};
console.log(performSomeMathsOnPositiveNumbers(-10, -8, adder));
console.log(performSomeMathsOnPositiveNumbers(-10, -8, minuser));
console.log(performSomeMathsOnPositiveNumbers(-10, -8, function (a, b) {
    return a / b;
}));
