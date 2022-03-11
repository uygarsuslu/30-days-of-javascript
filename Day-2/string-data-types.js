// ********** STRING VERİ TÜRÜ ********** //

let name1 = "uygar",
    surname1 = "süslü"
let fullName = name1 + " " + surname1
console.log(fullName);
/* *************************************************************************************** */
let paragraph1 = "benim\nadım\nuygar\nsüslü"
console.log("n:", paragraph1);  // \n: yeni satıra geçer
/* *************************************************************************************** */
let paragraph2 = "benim\tadım\tuygar\tsüslü"
console.log("t:", paragraph2);  // \t: 8 tane boşluk ekler yani "tab"
/* *************************************************************************************** */
let paragraph3 = "benim\\adım\\uygar\\süslü"
console.log(paragraph3); // \\: slash ekler
/* *************************************************************************************** */
let paragraph4 = "uygar \"TAMAM\" dedi"
console.log(paragraph4);
/* *************************************************************************************** */
let name2 = "uygar",
    surname2 = "süslü"
let a = 4, b = 5
fullName = `
${name2} 
${a} + ${b} = ${a + b}
${surname2}
${a > b}
`
console.log("back-ticks: ", fullName);
/* *************************************************************************************** */