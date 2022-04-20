// ****** callback ****** //

const val = number => number ** 2

function cube(cb, number) {
    return cb(number) * number
}

console.log(cube(val, 3)) // 27
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** returning function ****** //

const a = s1 => {
    const b = s2 => {
        const c = s3 => {
            return s1 + s2 + s3
        }
        return c
    }
    return b
}
console.log(a(5)(10)(20)); // 35

console.log("////////////////////////////////////////////////////////////////////////////")

const numbers = [1, 3, 5, 7, 9]
let total = 0
numbers.forEach(number => total += number)
console.log(total);

/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** setInterval ****** //

// function sayHello() {
//     console.log("hello");
// }
// setInterval(sayHello, 3000)

/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** setTimeout ****** //

// function sayHi() {
//     console.log("hi");
// }
// setTimeout(sayHi, 2000)
/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** clearInterval ****** //

// function sayHello() {
//     console.log("hello");
// }
// const interval1 = setInterval(sayHello, 1000)

// setTimeout(() => {
//     clearInterval(interval1)
//     console.log("interval işlemi iptal edildi");
// }, 5000)
/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** clearTimeout ****** //

function sayHi() {
    console.log("hi");
}
const interval = setInterval(sayHi, 1000)

const timeout = setTimeout(() => {
    clearInterval(interval)
}, 3000) // bu sayıyı bir de 7000 yap !!!!!!

setTimeout(() => {
    clearTimeout(timeout)
    console.log("timeout işlemi iptal edildi, interval devam edecek");
}, 5000)
/* *************************************************************************************** */