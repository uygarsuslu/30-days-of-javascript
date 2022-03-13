// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h) //

let base = prompt("bir taban değeri giriniz")
let height = prompt("lütfen yükseklik giriniz")
let area1 = 0.5 * height * base
console.log("üçgenin alanı:", area1);

/* *************************************************************************************** */

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) //

let a = parseInt(prompt("1. kenarı giriniz"))
let b = parseInt(prompt("2. kenarı giriniz"))
let c = parseInt(prompt("3. kenarı giriniz"))
let perimeter1 = a + b + c
console.log("üçgenin çevresi:", perimeter1);

/* *************************************************************************************** */

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) //

let length = parseInt(prompt("lütfen yükseklik giriniz"))
let width = parseInt(prompt("lütfen genişlik giriniz"))
let perimeter2 = 2 * (length + width)
let area2 = length * width
console.log("dikdörtgenin alanı:", area2);
console.log("dikdörtgenin çevresi:", perimeter2);

/* *************************************************************************************** */

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. //

let radius = parseInt(prompt("lütfen yarıçap giriniz"))
let pi = 3.14
let area3 = pi * radius * radius
let circumference = 2 * radius * pi
console.log("dairenin çevresi:", circumference);
console.log("dairenin alanı:", area3);

/* *************************************************************************************** */

// If the length of your name is greater than 7 say, your name is long else say your name is short. //

let name = "Uygar"
name.length > 7 ? console.log("adınız uzun") : console.log("adınız kısa")

/* *************************************************************************************** */

// Compare your first name length and your family name length and you should get this output. //

let firstName = "Uygar"
let lastName = "Süslü"

firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}`) : console.log(`Your first name, ${firstName} is shorter than your last name, ${lastName}`)

/* *************************************************************************************** */

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge. //

let myAge = 2
let yourAge = 25
let difference = Math.abs(myAge - yourAge)
myAge > yourAge ? console.log(`I am ${difference} years older than you.`) : console.log(`I am ${difference} years younger than you.`)

/* *************************************************************************************** */

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years. //

const date1 = new Date()

let birthDay = parseInt(prompt("doğduğunuz yılı giriniz"))
let age = date1.getFullYear() - birthDay
let fark = 18 - age
age >= 18 ? console.log(`You are ${age}. You are old enough to drive`) : console.log(`You are ${age}. You will be allowed to drive after ${fark} years.`)

/* *************************************************************************************** */

// Create a human readable time format using the Date time object

const date2 = new Date()

let year1 = date2.getFullYear()
let month1 = date2.getMonth()
let day1 = date2.getDate()
let hours1 = date2.getHours()
let minutes1 = date2.getMinutes()

let humanReadableDate1 = `tarih 1: ${year1}-${month1}-${day1} ${hours1}:${minutes1}`
let humanReadableDate2 = `tarih 2: ${day1}-${month1}-${year1} ${hours1}:${minutes1}`
let humanReadableDate3 = `tarih 3: ${day1}/${month1}/${year1} ${hours1}:${minutes1}`

console.log(humanReadableDate1);
console.log(humanReadableDate2);
console.log(humanReadableDate3);

/* *************************************************************************************** */