// ****** Function returning value ****** //

function sayHello1() {
    let msg1 = "hello world"
    console.log("fonksiyon:", msg1); // hello world
}
let hello = sayHello1()
console.log("fonksiyon return almayınca:", hello); // undefined => fonksiyon return döndürmediği için
//////////////////////////////////////////////////////////////////////////////////
function sayHello2() {
    let msg2 = "merhaba dünya"
    return msg2;
}
console.log("return:", sayHello2()); // merhaba dünya
let hello9 = sayHello2()
console.log("fonksiyon return alınca:", hello9); // merhaba dünya => fonksiyon return döndüğü için
/* *************************************************************************************** */

// ****** Function with a parameter ****** //

function multiply(num1, num2) {
    return num1 * num2
}
console.log("çarpım parametre:", multiply(5, 2)); // 10
//////////////////////////////////////////////////////////////////////////////////
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log("string parametre:", printFullName('Uygar', 'Süslü')) // Uygar Süslü
/* *************************************************************************************** */

// ****** Function with many parameters ****** //

function sumArrayValues(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}
let dizi = [2, 4, 6, 8, 10]
console.log("toplam:", sumArrayValues(dizi)); // 30
/* *************************************************************************************** */

// ****** Function with unlimited number of parameters ****** //

function topla() {
    console.log(arguments); // Arguments(5) [1, 2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total
}
console.log("arguments:", topla(1, 2, 3, 4, 5)) // 15
/* *************************************************************************************** */

// ****** Unlimited number of parameters in arrow function ****** //

const sumAllNums2 = (...args) => {
    console.log(args); // (4) [1, 2, 3, 4]
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total
}
console.log("...args:", sumAllNums2(1, 2, 3, 4)) // 10
/* *************************************************************************************** */

// ****** Anonymous Function ****** //

const sayHi = function (name) {
    return `Hello ${name}`
}
console.log("anonim fonksiyon:", sayHi("Uygar")); // Hello Uygar
//////////////////////////////////////////////////////////////////////////////////
const sayHi2 = function () {
    return `hello`
}
console.log("boş anonim foknsiyon:", sayHi2()); // hello
/* *************************************************************************************** */

// ****** Self Invoking Functions ****** //

(function (n) {
    console.log("kendi kendini çağıran fonksiyon-1:", n * n)
})(2); // 4
//////////////////////////////////////////////////////////////////////////////////
(function () {
    console.log("kendi kendini çağıran fonksiyon-2:", "he yo!"); // he yo!
})();
/* *************************************************************************************** */

// ****** Arrow Function ****** //

function hello1() {
    console.log("regular function:");
}
hello1()

function hello2(name) {
    return `hello ${name}`
}
console.log(hello2("Tayfun"))
//////////////////////////////////////////////////////////////////////////////////
const hello3 = () => {
    console.log("arrow function:");
}
hello3()

const hello4 = (name) => {
    return `hello ${name}`
}
console.log(hello4("Ahmet"))
//////////////////////////////////////////////////////////////////////////////////
const hello5 = name => console.log("explicit return:");
hello5() // tek parametreli işlemlerde parantez "()" kullanmaya gerek yok !!!!!!

const hello6 = name => `hello ${name}`
console.log(hello6("Gökalp"))
/* *************************************************************************************** */

// ****** Unlimited number of parameters in arrow function ****** //

const sum = (num1, ...numbers) => {
    console.log("num1:", num1); // 2
    console.log("numbers:", numbers); // (4) [5, 7, 8, 10]
}
sum(2, 5, 7, 8, 10)
//////////////////////////////////////////////////////////////////////////////////
const sumAllNums = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log("...args:", sumAllNums(1, 2, 3, 4)) // 10
/* *************************************************************************************** */

// ****** Function with default parameters ****** //

function multiply2(num1, num2 = 2) {
    return num1 * num2
}
console.log("varsayılan parametre-1:", multiply2(10)); // 20
console.log("varsayılan parametre-2:", multiply2(4, 3)); // 12
//////////////////////////////////////////////////////////////////////////////////
function greetings(name = 'Peter') {
    return `${name}, welcome to 30 Days Of JavaScript!`
}
console.log(greetings()) // Peter, welcome to 30 Days Of JavaScript!
console.log(greetings('Uygar')) // Uygar, welcome to 30 Days Of JavaScript!
/* *************************************************************************************** */

// ****** call vs. invoke ****** //

function test() {
    console.log("test fonksiyonu çalıştı");
}
test() // test fonksiyonu çalıştı

function invoker(func) {
    func()
}
invoker(test) // test fonksiyonu çalıştı
/* *************************************************************************************** */