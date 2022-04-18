// ****** for, while ve do while döngüsünü kullanarak 0'dan 10'a kadar yineleyin ****** //
console.log("for:");
for (let i = 0; i <= 10; i++) { console.log(i) }
console.log("////////////////////////////////////////////////////////////////////////////")
console.log("while:");
let j = 0; while (j <= 10) { console.log(j); j++ }
console.log("////////////////////////////////////////////////////////////////////////////")
console.log("do - while:");
let t = 0; do { console.log(t); t++ } while (t <= 10)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** console.log kullanarak aşağıdaki kalıbı oluşturan bir döngü yazın ****** //
console.log("pattern1:");
let x = "#";
for (let i = 0; i < 7; i++) {
    console.log(x);
    x = x + "#";
}
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** döngü kullanarak aşağıdaki deseni yazdırın ****** //
console.log("pattern2:");
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`)
}
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** 0'dan 100'e kadar yineleme yapmak ve yalnızca çift sayıları yazdırmak için for döngüsü kullanın ****** //
console.log("even numbers:");
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i);
}
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** 0'dan 100'e kadar yineleme yapmak ve tüm sayıların toplamını yazdırmak için for döngüsünü kullanın ****** //
let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log("sum:", sum);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

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
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin ****** //
var arr = [];
for (var i = 0, J = 5; i < J; i++) {
    arr.push(Math.round(Math.random() * J))
}
console.log("5 rastgele sayı:", arr)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** 5 rastgele sayı dizisi oluşturan küçük bir komut dosyası geliştirin ve sayılar benzersiz olmalıdır ****** //
let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}
console.log("5 farklı rastgele sayı:", randomUniqueArr)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** Altı karakterlik rastgele bir kimlik oluşturan küçük bir komut dosyası geliştirin ****** //
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log("6 karakterlik rastgele şifre:", randomChars)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** Herhangi bir sayıda rastgele karakter oluşturan küçük bir komut dosyası geliştirin ****** //
let chars1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let r = Math.floor(Math.random() * chars1.length);
let randChars = "";
for (let i = 0; i < r; i++) {
    let random = Math.floor(Math.random() * chars1.length);
    randChars += chars1[random];
}
console.log("rastgele şifre:", randChars);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

// ****** Yukarıdaki ülkeler dizisini kullanarak, ülkeler uzunluğu için bir dizi oluşturun ****** //

let countriesCharLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesCharLength.push(countries[i].length);
}
console.log("ülkeler uzunluğu:", countriesCharLength);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** Ülkeler dizisini kullanın ****** //
let newCountries1 = [];
for (let i = 0; i < countries.length; i++) {
    newCountries1.push([countries[i], countries[i].slice(0, 3), countries[i].length])
}
console.log("ülkelerin ilk 3 harfi:", newCountries1)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** 'land' kelimesini içeren bir ülke veya ülkeler olup olmadığını kontrol edin ****** //
let countWithLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("LAND")) {
        countWithLand.push(countries[i]);
    }
}
console.log("land içeren ülkeler:", countWithLand);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** 'ia' ile biten bir ülke veya ülkeler olup olmadığını kontrol edin ****** //
let countWithIa = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("IA")) {
        countWithIa.push(countries[i]);
    }
}
console.log("ia ile biten ülkeler:", countWithIa);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// apply: bir dizi veriyi bir işleve parametre olarak iletmenin uygun bir yolu //

// ****** yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun ****** //
highestNum = Math.max.apply(null, countriesCharLength); // 8
console.log("en uzun ülke ismi:", countries[countriesCharLength.indexOf(highestNum)]);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** yukarıdaki ülkeler dizisini kullanarak sadece 5 karakter içeren ülkeyi bulun ****** //
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
}
console.log("sadece 5 harfli ülkeler:", countriesWithFiveChars)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];

// ****** webTechs dizisindeki en uzun kelimeyi bulun ****** //
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
}
let highestChar;
highestChar = Math.max.apply(null, webTechsLength); // 10
console.log("en uzun kelime:", webTechs[webTechsLength.indexOf(highestChar)]);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** webTechs dizisini kullanın ****** //
let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechs.push([webTechs[i], webTechs[i].length])
}
console.log("dizi ve karakter sayısı:", newWebTechs)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** MERN ****** //
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
}
console.log("baş harfleri:", mern)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** dizinin tüm öğelerini yazdırın ****** //
let techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for (let i = 0; i < techs.length; i++) {
    console.log("dizi:", techs[i])
}
// for (let tech of techs) {
//     console.log(tech);
// }
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** döngü kullanarak sırayı tersine çevirin ****** //
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let meFruit = []
for (let i = fruits.length - 1; i >= 0; i--) {
    meFruit.push(fruits[i])
}
console.log("testen yazma:", meFruit);
/* *************************************************************************************** */