// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h) //

let base = prompt("bir taban değeri giriniz")
let height = prompt("lütfen yükseklik giriniz")
let area = 0.5 * height * base
console.log("üçgenin alanı:", area);

/* *************************************************************************************** */

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) //

let a = parseInt(prompt("1. kenarı giriniz"))
let b = parseInt(prompt("2. kenarı giriniz"))
let c = parseInt(prompt("3. kenarı giriniz"))
let perimeter = a + b + c
console.log("üçgenin çevresi:", perimeter);

/* *************************************************************************************** */

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) //

let length = parseInt(prompt("lütfen yükseklik giriniz"))
let width = parseInt(prompt("lütfen genişlik giriniz"))
let perimeter = 2 * (length + width)
let area = length * width
console.log("dikdörtgenin alanı:", area);
console.log("dikdörtgenin çevresi:", perimeter);

/* *************************************************************************************** */

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. //

let radius = parseInt(prompt("lütfen yarıçap giriniz"))
let pi = 3.14
let area = pi * radius * radius
let circumference = 2 * radius * pi
console.log("dairenin çevresi:", circumference);
console.log("dairenin alanı:", area);

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

const date = new Date()

let birthDay = parseInt(prompt("doğduğunuz yılı giriniz"))
let age = date.getFullYear() - birthDay
let fark = 18 - age
age >= 18 ? console.log(`You are ${age}. You are old enough to drive`) : console.log(`You are ${age}. You will be allowed to drive after ${fark} years.`)

/* *************************************************************************************** */

// Create a human readable time format using the Date time object

const date = new Date()

let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()

let humanReadableDate1 = `tarih 1: ${year}-${month}-${day} ${hours}:${minutes}`
let humanReadableDate2 = `tarih 2: ${day}-${month}-${year} ${hours}:${minutes}`
let humanReadableDate3 = `tarih 3: ${day}/${month}/${year} ${hours}:${minutes}`

console.log(humanReadableDate1);
console.log(humanReadableDate2);
console.log(humanReadableDate3);

/* *************************************************************************************** */

// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 2020-01-02 07:05

const date = new Date()

let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()

let humanReadableDate = console.log(`${year}-${month}-${day} ${hours}:${minutes}`)

/* *************************************************************************************** */