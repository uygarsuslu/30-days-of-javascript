// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. //

let age = parseInt(prompt("Enter your age"))
let diff = 18 - age
if (age > 18) {
    console.log("You are old enough to drive")
}
else {
    console.log(`You are left with ${diff} years to drive.`)
}

/* *************************************************************************************** */

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. //

let myAge = parseInt(prompt("Enter your age:"))
let yourAge = parseInt(prompt("Enter your age:"))
let difference = Math.abs(myAge - yourAge)

myAge > yourAge ? console.log(`i am ${difference} years older than you`) : console.log(`you are ${difference} years older than me`)

/* *************************************************************************************** */

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? //

let number = parseInt(prompt("Enter a number:"))

if (number % 2 == 0) {
    console.log(`${number} is an even number`)
}
else {
    console.log(`${number} is an odd number`)
}

/* *************************************************************************************** */

// Write a code which can give grades to students according to theirs scores //

let note = parseInt(prompt("Enter a note:"))

if (note >= 0 && note <= 49) { console.log("F") }
else if (note >= 50 && note <= 59) { console.log("D") }
else if (note >= 60 && note <= 69) { console.log("C") }
else if (note >= 70 && note <= 79) { console.log("B") }
else if (note >= 80 && note <= 100) { console.log("A") }
else { console.log("Entered value was not a number") }

/* *************************************************************************************** */

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is //

let month = prompt("enter a month:")

if (month == "september" || month == "october" || month == "november") {
    console.log("Autumn")
}
else if (month == "december" || month == "january" || month == "february") {
    console.log("Winter")
}
else if (month == "march" || month == "april" || month == "may") {
    console.log("Spring")
}
else if (month == "june" || month == "july" || month == "august") {
    console.log("Summer")
}
else {
    console.log("you did not enter a month")
}

/* *************************************************************************************** */

var dt = new Date();
var month1 = dt.getMonth() + 1;
var year = dt.getFullYear();
daysInMonth = new Date(year, month1, 0).getDate();
console.log(daysInMonth);

/* *************************************************************************************** */