// ****** split kullanarak dizi oluşturma ****** //
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log("split:", charsInJavaScript);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log("split:", companies);
/* *************************************************************************************** */

// ****** dizin öğelerine index kullanarak erişme ****** //
const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log("length:", fruits.length) // 4

let lastIndex = fruits.length - 1
console.log("last index:", fruits[lastIndex]) // lemon
/* *************************************************************************************** */

// ****** fill: statik diziler oluşturma ****** //
const eightXvalues = Array(3).fill('X') // it creates eight element values filled with 'X'
console.log("fill:", eightXvalues)
/* *************************************************************************************** */

// ****** concat: dizi birleştirme ****** //
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
console.log("concat:", firstList.concat(secondList, 7, 8, 9))
/* *************************************************************************************** */

// ****** indexOf: aranan elemanın dizide bulunup bulunmadığını kontrol eder ****** //
const numbers = [1, 2, 3, 4, 5]
// varsa index değerini yoksa -1 döner // ilk bulduğu değeri döner 
console.log("indexOf:", numbers.indexOf(5)) // 4
console.log("indexOf:", numbers.indexOf(0)) // -1
/* *************************************************************************************** */

// ****** lastIndexOf: aranan elemanın dizide bulunup bulunmadığını kontrol eder  ****** //
const numbers1 = [1, 2, 3, 4, 5, 3, 1, 2]
// varsa index değerini yoksa -1 döner // son bulduğu değeri döner
console.log("lastIndexOf:", numbers1.lastIndexOf(2)) // 7
console.log("lastIndexOf:", numbers1.lastIndexOf(0)) // -1 
/* *************************************************************************************** */

// ****** includes: dizide bir öğenin olup olmadığını kontrol eder ****** //
const numbers2 = [1, 2, 3, 4, 5]
// varsa true, yoksa false değerini döndürür  // büyük - küçük harf duyarlı 
console.log("includes:", numbers2.includes(5)) // true
console.log("includes:", numbers2.includes(0)) // false
/* *************************************************************************************** */

// ****** Array.isArray: verinin array olup olmadığını kontrol eder ****** //
const numbers3 = [1, 2, 3, 4, 5]
console.log("Array.isArray:", Array.isArray(numbers3)) // true
// array ise true, değilse false döner
const number = 100
console.log("Array.isArray:", Array.isArray(number)) // false
/* *************************************************************************************** */

// ****** toString: diziyi stringe çevirir ****** //
const numbers4 = [1, 2, 3, 4, 5]
console.log("toString:", numbers4.toString()) // 1,2,3,4,5
/* *************************************************************************************** */

// ****** join: dizideki her bir elemanı join'de verdiğimiz karaktere göre birleştirip string döner ****** //
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log("join():", names.join()) // Asabeneh,Mathias,Elias,Brook
console.log("join(''):", names.join('')) //AsabenehMathiasEliasBrook
console.log("join(' '):", names.join(' ')) //Asabeneh Mathias Elias Brook
console.log("join(' # '):", names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
/* *************************************************************************************** */

// ****** slice: diziyi istediğimiz şekilde parçalamaya yarar ****** //
const names1 = ["Tayfun", "Uygar", "Gökalp", "Mehmet"]
// son eleman dahil değil //
console.log("slice():", names1.slice()) // tüm diziyi kopyalar
console.log("slice(0):", names1.slice(0)) // tüm diziyi kopyalar
console.log("slice(0, names1.length):", names1.slice(0, names1.length)) // tüm diziyi kopyalar
console.log("slice(1, 3):", names1.slice(1, 3)) // 
/* *************************************************************************************** */

// ****** splice: diziyi istediğimiz yerden bölmeye ve yeni eleman eklemeye yarar ****** //
const names2 = ["Tayfun", "Uygar", "Gökalp", "Mehmet"]
// ilk değer = index sırası // ikinci değer = kaç tane // üçüncü değer = yeni eklenecek eleman 
console.log("splice(1, 2, 'Ömer', 'Ali'):", names2.splice(1, 2, "Ömer", "Ali")) // ["uygar", "gökalp"]
console.log("splice:", names2) // ["Tayfun", "Ömer", "Ali", "Mehmet"]
/* *************************************************************************************** */

// ****** push: dizinin sonuna eleman ekler ****** //
const arr = ['item1', 'item2', 'item3']
arr.push('new item')
console.log("push:", arr)
/* *************************************************************************************** */

// ****** pop: dizinin sonundaki elemanı siler ****** //
const numbers5 = [1, 2, 3, 4, 5]
console.log("çıkan pop:", numbers5.pop()) // 5
console.log("pop:", numbers5) // [1, 2, 3, 4]
/* *************************************************************************************** */

// ****** shift: dizinin başındaki elemanı siler ****** //
const numbers6 = [1, 2, 3, 4, 5]
console.log("silinen shift:", numbers6.shift()) // 1
console.log("shift:", numbers6) // [2, 3, 4, 5]
/* *************************************************************************************** */

// ****** unshift: dizinin başına eleman ekler ****** //
const numbers7 = [1, 2, 3, 4, 5]
numbers7.unshift(0)
console.log("unshift:", numbers7) // [0,1,2,3,4,5]
/* *************************************************************************************** */

// ****** reverse: diziyi ters çevirir ****** //
const numbers8 = [1, 2, 3, 4, 5]
console.log("reverse:", numbers.reverse()) // 
/* *************************************************************************************** */

// ****** sort: diziyi alfabetik sıraya göre sıralar ****** //
const word = ['React', 'CSS', 'HTML']
console.log("sort:", word.sort()) // ["CSS", "HTML", "React"]
/* *************************************************************************************** */

// ****** array of array ****** //
const frontEnd = ['HTML', 'CSS', 'JS']
const backEnd = ['Node', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log("array of array:", fullStack)   // [["HTML", "CSS", "JS"], ["Node", "MongoDB"]]
/* *************************************************************************************** */

// ****** split - reverse -join ****** //
let myName = "uygar"
// console.log(myName.split("").reverse().join(""))
let changeMyName = myName.split("").reverse().join("")
console.log("split - reverse -join:", changeMyName);
/* *************************************************************************************** */