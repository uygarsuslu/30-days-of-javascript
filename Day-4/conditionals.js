// ****** if ****** //

let num1 = 3
if (num1 > 0) {
    console.log("if:", `${num1} is a positive number`)
}

let isRaining1 = true
if (isRaining1) {
    console.log("if:", 'Remember to take your rain coat.')
}
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** if - else ****** //

let num2 = 3
if (num2 > 0) {
    console.log("if - else:", `${num2} is a positive number`)
} else {
    console.log("if - else:", `${num2} is a negative number`)
}

isRaining2 = false
if (isRaining2) {
    console.log("if - else:", 'You need a rain coat.')
} else {
    console.log("if - else:", 'No need for a rain coat.')
}
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** if - else if - else ****** //

let a = 0
if (a > 0) {
    console.log("else if:", `${a} is a positive number`)
} else if (a < 0) {
    console.log("else if:", `${a} is a negative number`)
} else if (a == 0) {
    console.log("else if:", `${a} is zero`)
} else {
    console.log("else if:", `${a} is not a number`)
}

let weather1 = 'sunny'
if (weather1 === 'rainy') {
    console.log("else if:", 'You need a rain coat.')
} else if (weather1 === 'cloudy') {
    console.log("else if:", 'It might be cold, you need a jacket.')
} else if (weather1 === 'sunny') {
    console.log("else if:", 'Go out freely.')
} else {
    console.log("else if:", 'No need for rain coat.')
}
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** switch ****** //

let weather2 = 'cloudy'
switch (weather2) {
    case 'rainy':
        console.log("switch:", 'You need a rain coat.')
        break
    case 'cloudy':
        console.log("switch:", 'It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log("switch:", 'Go out freely.')
        break
    default:
        console.log("switch:", 'No need for rain coat.')
}

let num = parseInt(prompt('Enter number'));
switch (true) {
    case num > 0:
        console.log("switch:", 'Number is positive');
        break;
    case num == 0:
        console.log("switch:", 'Numbers is zero');
        break;
    case num < 0:
        console.log("switch:", 'Number is negative');
        break;
    default:
        console.log("switch:", 'Entered value was not a number');
}
/* *************************************************************************************** */