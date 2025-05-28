const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

const toFromInput  = inputs.item(0)
const detailsInput = inputs.item(1)

const handleDetailsInputEvent = (event: InputEvent) => {
     const detailsValue = "DETAILS_" + toFromInput.value;
     detailsInput.value = detailsValue;
     console.log(toFromInput.value)
}

toFromInput.addEventListener(
     "input",
    handleDetailsInputEvent
 )

const adder = (a: number, b: number): number => {
    return a + b;
}

const minuser = (a: number, b: number): number => {
    return a - b * a;
}

console.log(adder (1, 2))
console.log(minuser (1, 2))

const performSomeMaths = (
    a: number,
    b: number,
    mathsDoer: (a: number, b: number) => number
) => {
    return mathsDoer(a, b)
}

console.log(performSomeMaths(10, 8, adder))
console.log(performSomeMaths(10, 8, minuser))


const performSomeMathsOnPositiveNumbers = (
    a: number,
    b: number,
    mathsDoer: (a: number, b: number) => number
) => {
    let positiveA = Math.abs(a)
    let positiveB = Math.abs(b)
    return mathsDoer(positiveA, positiveB)
}

console.log(performSomeMathsOnPositiveNumbers(-10, -8, adder))
console.log(performSomeMathsOnPositiveNumbers(-10, -8, minuser))


console.log(
    performSomeMathsOnPositiveNumbers(
        -10,
        -8,
        (a, b) => {
            return a / b;
        }
    )
)
