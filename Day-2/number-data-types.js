// ********** NUMBER VERİ TÜRÜ ********** //

// primitive data types = number, string, boolean, null, undefined //
// non-primitive data types = object, array, function //

let numOne = 4
let numTwo = 4
console.log("numOne = numTwo: ", numOne == numTwo);
/* *************************************************************************************** */
let js = "Javascript"
let py = "Python"
console.log("js = py: ", js == py);
/* *************************************************************************************** */
let lightOn = true
let lightOff = true
console.log("lightOn = lightOff: ", lightOn == lightOff);
/* *************************************************************************************** */
let nums = [1, 2, 3]
nums[0] = "uygar"
console.log(nums);
/* *************************************************************************************** */
let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
console.log("nums1 = nums2: ", nums1 == nums2);
console.log("[1, 2, 3] = [1, 2, 3]: ", [1, 2, 3] == [1, 2, 3]);
/* *************************************************************************************** */
let user1 = {
    name: "uygar",
    surname: "süslü"
}
let user2 = {
    name: "uygar",
    surname: "süslü"
}
console.log("user1 = user2: ", user1 == user2);
/* *************************************************************************************** */
let nums3 = [4, 5, 6]
let nums4 = nums3
console.log("nums3 = nums4: ", nums3 == nums4);
/* *************************************************************************************** */
console.log("pi değeri: ", Math.PI)
console.log("round pi değeri: ", Math.round(Math.PI)) // 0.5 altındaysa aşağı, üstündeyse yukarı yuvarlar
console.log("ceil pi değeri: ", Math.ceil(Math.PI)) // tavan
console.log("floor pi değeri: ", Math.floor(Math.PI)) // taban
/* *************************************************************************************** */
console.log("en düşük değer: ", Math.min(-5, 4, 2, 6, -8));
console.log("en yüksek değer: ", Math.max(-5, 4, 2, 6, -8));
/* *************************************************************************************** */
console.log("random sayı 0-1: ", Math.random()); // 0 ile  0.9999 arasında
console.log("random sayı 0-10: ", Math.round(Math.random() * 11)); // 0 ile  10 arasında
/* *************************************************************************************** */
console.log("-15'in mutlak değeri: ", Math.abs(-15));
console.log("100'ün karekökü: ", Math.sqrt(100));
console.log("3'ün karesi: ", Math.pow(3, 2));
/* *************************************************************************************** */