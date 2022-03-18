// ****** for Loop  ****** //

// for(başlatma, koşul, artırma/azaltma){ kod buraya yazılır } //

// artırma
for (let i = 0; i <= 5; i++) {
    console.log("i++:", i)
}

// azaltma
for (let i = 5; i >= 0; i--) {
    console.log("i--:", i)
}

// çarpma
for (let i = 0; i <= 5; i++) {
    console.log(`çarpma: ${i} * ${i} = ${i * i}`)
}

// dizinin tüm elemanlarını yazdırma
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
for (let i = 0; i < countries.length; i++) {
    console.log("countries:", countries[i].toUpperCase())
}

// dizinin tüm elemanlarını toplama
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log("sum:", sum)  // 15

// diziyi kopyalama
const numbers1 = [1, 2, 3, 4, 5]
const newArr = []
for (let i = 0; i < numbers1.length; i++) {
    newArr.push(numbers1[i] ** 2)
}
console.log("newArr:", newArr)  // [1, 4, 9, 16, 25]
/* *************************************************************************************** */

// ****** while loop ****** //

let i = 6
while (i <= 5) {
    console.log("while:", i) // çalışmaz
    i++
}

let k = 0
while (k <= 5) {
    console.log("while:", k) // bunu burda yazarsak 5, k++'nın altında yazarsak 6 kez döner
    k++
}
/* *************************************************************************************** */

// ****** do - while loop ****** //

let t = 0
do {
    console.log("do-while 1:", t) // 5 kez döner, t++'nın altına yazsaydık 6 kez dönerdi
    t++
}
while (t <= 5)

let j = 8
do {
    console.log("do-while 2:", j) // 6 döner, j++'nın altına yazsaydık 9 dönerdi
    j++
}
while (j <= 5)
/* *************************************************************************************** */

// ****** for of loop ****** //

const numbers2 = [1, 2, 3, 4, 5]
for (const num of numbers2) {
    console.log("for of loop:", num) // 1 2 3 4 5
}

// her elemanın sadece ilk harfini al
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB']
for (const tech of webTechs) {
    console.log("for of loop:", tech[0]) // H C J R N M
}
/* *************************************************************************************** */

// ****** break ****** //
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break
    } // döngünün ortasında bir değer arıyorsak kullanılır
    console.log("break:", i) // 0 1 2
}
/* *************************************************************************************** */

// ****** continue ****** //
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue
    } // dizide es geçmek istediğimiz değer varsa kullanılır
    console.log("continue:", i) // 0 1 2 4 5
}
/* *************************************************************************************** */