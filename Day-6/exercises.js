// ****** for, while ve do while döngüsünü kullanarak 0'dan 10'a kadar yineleyin ****** //
console.log("for:");
for (let i = 0; i <= 10; i++) { console.log(i) }
console.log("while:");
let j = 0; while (j <= 10) { console.log(j); j++ }
console.log("do - while:");
let t = 0; do { console.log(t); t++ } while (t <= 10)
/* *************************************************************************************** */

// ****** console.log kullanarak aşağıdaki kalıbı oluşturan bir döngü yazın ****** //
console.log("pattern1:");
let x = "#";
for (let i = 0; i < 7; i++) {
    console.log(x);
    x = x + "#";
}
/* *************************************************************************************** */

// ****** döngü kullanarak aşağıdaki deseni yazdırın ****** //
console.log("pattern2:");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`)
}
/* *************************************************************************************** */

// ****** 0'dan 100'e kadar yineleme yapmak ve yalnızca çift sayıları yazdırmak için for döngüsü kullanın ****** //
console.log("even numbers:");
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i);
}
/* *************************************************************************************** */

// ****** 0'dan 100'e kadar yineleme yapmak ve tüm sayıların toplamını yazdırmak için for döngüsünü kullanın ****** //
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log("sum:", sum);
/* *************************************************************************************** */

// ****** 0'dan 100'e kadar yineleme yapmak için for döngüsünü kullanın ve tüm çiftlerin toplamını ve tüm teklerin toplamını yazdırın. ****** //
let sum1 = 0
let sum2 = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum1 += i
    }
    else {
        i % 2 != 0
        sum2 += i
    }
}
console.log("sum1:", sum1, "sum2:", sum2);
/* *************************************************************************************** */

// ******  ****** //

/* *************************************************************************************** */

// ******  ****** //

/* *************************************************************************************** */

// ******  ****** //

/* *************************************************************************************** */