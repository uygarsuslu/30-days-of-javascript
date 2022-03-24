// ****** 2 - Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name ****** //

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName("Uygar", "Süslü"));
/* *************************************************************************************** */

// ****** 3- Declare a function addNumbers and it takes two two parameters and it returns sum ****** //

function addNumbers(num1, num2) {
    return num1 + num2
}
console.log(addNumbers(5, 4));
/* *************************************************************************************** */

// ****** 4- An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle ****** //

function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(5, 8));
/* *************************************************************************************** */

// ****** 5- A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle ****** //

function perimeterOfRectangle(length, width) {
    let perimeter = (length * width) * 2
    return perimeter
}
console.log(perimeterOfRectangle(5, 8));
/* *************************************************************************************** */

// ****** 6- A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism ****** //

function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(5, 7, 2));
/* *************************************************************************************** */

// ****** 7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle ****** //

function areaOfCircle(r) {
    let pi = 3.14
    let area = pi * r * r
    return area
}
console.log(areaOfCircle(6));
/* *************************************************************************************** */

// ****** 8- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle ****** //

function circumOfCircle(r) {
    let pi = 3.14
    let area = pi * 2 * r
    return area
}
console.log(circumOfCircle(6));
/* *************************************************************************************** */

// ****** 9- Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density ****** //

function density(mass, volume) {
    return mass / volume
}
console.log(density(20, 4));
/* *************************************************************************************** */

// ****** 11- Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight ****** //

function weight(mass, gravity) {
    return mass * gravity
}
console.log(weight(20, 4));
/* *************************************************************************************** */

// ****** 12- Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit ****** //

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(20));
/* *************************************************************************************** */

// ****** 13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below ****** //

function BMI(weight, height) {
    let bmi = weight / (height * height)
    if (bmi < 18.5) { return `Underweight` }
    else if (bmi > 18.5 && bmi < 24.9) { return `Normal Weight` }
    else if (bmi > 24.9 && bmi < 29.9) { return `Overweight` }
    else { return `Obese` }
}
console.log(BMI(90, 1.80));
/* *************************************************************************************** */

// ****** 14- Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer ****** //

function checkSeason(month) {
    switch (month) {
        case "september":
        case "octobet":
        case "november":
            console.log("Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeason("june")
/* *************************************************************************************** */

// ****** 15- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method ****** //

function findMax(x, y, z) {
    return Math.max(x, y, z)
}
console.log(findMax(4, 8, 1))
/* *************************************************************************************** */

// ****** 3- Declare a function name printArr It takes array as a parameter and it prints out each value of the array ****** //

printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])
/* *************************************************************************************** */

// ****** 4- Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object ****** //

function showDateTime() {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    return `${day}/${month + 1}/${year} ${hours}:${minutes}`
}
console.log(showDateTime())
/* *************************************************************************************** */

// ****** 5- Declare a function name swapValues. This function swaps value of x to y ****** //

function swapValues(a, b) {
    let x = b
    let y = a
    console.log(x, y)
}
swapValues(2, 4)
/* *************************************************************************************** */

// ****** 6- Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method) ****** //

function reverseArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    console.log(newArr);
}
reverseArray([2, 3, 4])
/* *************************************************************************************** */

// ****** 7- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray ****** //

function capitalizeArray(arr) {
    let newArr = []
    arr.forEach(ar => {
        newArr.push(ar.toUpperCase())
    })
    return newArr
}
console.log(capitalizeArray(["uygar", "süslü"]))
/* *************************************************************************************** */

// ****** 9- Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item ****** //

removeitem = (index) => {
    let names = ["haldun", "süslü"]
    names.splice(index)
    return names
}
console.log(removeitem(1))
/* *************************************************************************************** */

// ****** 10- Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range ****** //

sumOfNumbers = (...args) => {
    let sum = 0
    args.forEach(arg => {
        sum += arg
    })
    return sum
}
console.log(sumOfNumbers(1, 2, 3, 4, 5))
/* *************************************************************************************** */

// ****** 13- Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number ****** //

evensAndOdds = (num) => {
    let odd = 0
    let even = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        }
        else (odd++)
    }
    return `the number of odds are ${odd}\nthe number of even are ${even}`
}
console.log(evensAndOdds(100))
/* *************************************************************************************** */

// ****** 15- Writ a function which generates a randomUserIp ****** //

randomUserIp = () => {
    let one = Math.floor(Math.random() * 255);
    let two = Math.floor(Math.random() * 255);
    let three = Math.floor(Math.random() * 255);
    let four = Math.floor(Math.random() * 255);
    return `IP: ${one}:${two}:${three}:${four}`
}
console.log(randomUserIp())
/* *************************************************************************************** */

// ****** 17- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number ****** //

randomHexaNumberGenerator = () => {
    let chars = "0123456789ABCDEF"
    let hex = ""
    for (let i = 0; i <= 6; i++) {
        hex += chars[Math.floor(Math.random() * chars.length)]
    }
    return `#${hex}`
}
console.log(randomHexaNumberGenerator())
/* *************************************************************************************** */

// ****** 1- Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated ****** //

// userIdGeneratedByUser = () => {
//     let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
//     let noId = Number(prompt("how many id do you want to generate"));
//     let noChars = Number(prompt("in how many chars"));
//     let ids = [];
//     for (i = 0; i < noId; i++) {
//         ids[i] = "";
//         for (k = 0; k < noChars; k++) {
//             ids[i] += chars[Math.floor(Math.random() * chars.length)];
//         }
//     }
//     ids.forEach(id => {
//         console.log(id);
//     })
// }
// userIdGeneratedByUser();
/* *************************************************************************************** */

// ****** 3- Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array ****** //

arrayOfHexaColors = () => {
    let chars = "0123456789ABCDEF";
    let hex = [];
    for (let k = 0; k < 3; k++) {
        hex[k] = "#";
        for (let i = 0; i < 6; i++) {
            hex[k] += chars[Math.floor(Math.random() * chars.length)];
        }
    }
    return hex;
}
console.log(arrayOfHexaColors())
/* *************************************************************************************** */

// ****** 7- Write a function generateColors which can generate any number of hexa or rgb colors ****** //

generateColors = (type, arrLength) => {
    let chars = "0123456789ABCDEF";
    let colors = [];
    if (type === "rgb") {
        for (i = 0; i < arrLength; i++) {
            colors[i] = "rgb";
            colors[i] += `(${Math.floor(Math.random() * 255)},`;
            colors[i] += `${Math.floor(Math.random() * 255)},`
            colors[i] += `${Math.floor(Math.random() * 255)})`
        }
    } else if (type === "hexa") {
        for (let i = 0; i < arrLength; i++) {
            colors[i] = "#";
            for (k = 0; k < 6; k++) {
                colors[i] += chars[Math.floor(Math.random() * chars.length)];
            }
        }
    }
    return colors;
}
// console.log(generateColors("hexa", 3))
console.log(generateColors("rgb", 3))
/* *************************************************************************************** */

// ****** 9- Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number ****** //

function factorial(num) {
    let factorial = 1
    for (let i = num; i > 0; i--) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(5));
/* *************************************************************************************** */

// ****** 10- Call your function isEmpty, it takes a parameter and it checks if it is empty or not ****** //

function isEmpty(val) {
    if (val === undefined) {
        return "empty"
    }
    else { return "not empty" }
}
console.log(isEmpty());
console.log(isEmpty("sdfsd"));
/* *************************************************************************************** */

// ****** 12- Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback ****** //

function sumOfArrayItems(arr) {
    let sum = 0
    arr.forEach(nmbr => {
        if (typeof nmbr === "number") {
            sum += nmbr
        }
        else {
            sum = "it's a string"
        }
    })
    return sum
}
console.log(sumOfArrayItems([1, 2, 3]));
/* *************************************************************************************** */

// ****** 13- Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback ****** //

average = (arr) => {
    let sum = 0;
    arr.forEach(function (ar) {
        if (typeof ar === "number") {
            sum = sum + ar;
            sum = sum / arr.length;
        } else {
            sum = `it's a string`;
        }
    })
    return sum;
}
console.log(average([1, 2, 3]))
/* *************************************************************************************** */

// ****** 15- Write a function called isPrime, which checks if a number is prime number ****** //

function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0 && num > 1) {
            return `${num} is a not prime number`
        }
        else {
            return `prime`
        }
    }
}
console.log(isPrime(10))
/* *************************************************************************************** */

// ****** 20- Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array ****** //

function reverseCountries() {
    let countries = ["nigeria", "turkey", "italy", "canada", "england"]
    return countries.reverse()
}
console.log(reverseCountries())
/* *************************************************************************************** */