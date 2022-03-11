// ********** STRING METHODS ********** //

let ts = 'TypeScript'
console.log("TypeScript length: ", ts.length) // 10
let lastIndex = ts.length - 1
console.log("TypeScript length - 1: ", lastIndex) // 9
console.log("TypeScript last ındex: ", ts[lastIndex]) // t
/* *************************************************************************************** */
let word1 = "prototurk"
console.log("toUpperCase: ", word1.toUpperCase()) // büyük harfe çevirir
/* *************************************************************************************** */
let word2 = "PROTOTÜRK"
console.log("toLowerCase: ", word2.toLowerCase()) // küçük harfe çevirir
/* *************************************************************************************** */
let country1 = 'Finland'
console.log("substring: ", country1.substring(0, 3)) // ilk verilen değerden başlayıp ikinci verilen değere kadar alır
/* *************************************************************************************** */
let country2 = 'Finland'
console.log("substr: ", country2.substr(3, 4)) // ilk verilen değerden başlayıp ikinci verilen değer kadar alır 
/* *************************************************************************************** */
let string1 = '30 Days Of JavaScript'
console.log("split:", string1.split()) // -> ["30 Days Of JavaScript"]
console.log("split:", string1.split(' '))  // -> ["30", "Days", "Of", "JavaScript"]
console.log("split:", string1.split(''))  // -> ["3","0","","D","a","y","s","","O","f","","J","a","v","a","S","c","r","i","p","t"]
/* *************************************************************************************** */
let country3 = 'Denmark'
console.log("includes den:", country3.includes('den')) // false
console.log("includes Den:", country3.includes('Den')) // true
/* *************************************************************************************** */
let country4 = "Rusya"
console.log("replace Rusya:", country4.replace("Rusya", "Türkiye"));
/* *************************************************************************************** */
let string2 = '30 Days Of JavaScript'
console.log("indexOf Days:", string2.indexOf('Days')) // 3
console.log("indexOf days:", string2.indexOf('days')) // -1
console.log("indexOf a:", string2.indexOf('a')) // 4
console.log("indexOf JavaScript:", string2.indexOf('JavaScript')) // 11
/* *************************************************************************************** */
let string3 = 'Love is the best to in this world'
console.log("startsWith Love:", string3.startsWith('Love'))   // true
console.log("startsWith love:", string3.startsWith('love'))   // false
/* *************************************************************************************** */
let string4 = 'Love is the best to in this world'
console.log("endsWith world:", string4.endsWith('world')) // true
console.log("endsWith World:", string4.endsWith('World')) // false
/* *************************************************************************************** */
let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log("search love:", string5.search('love')) // 2
/* *************************************************************************************** */