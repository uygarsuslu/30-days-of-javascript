// ****** Creating a time object ****** //

const date = new Date()

console.log("ayrıtılı tarih:", date);
console.log("yıl:", date.getFullYear());
console.log("ay:", date.getMonth() + 1); // aylar(0-11) 
console.log("gün:", date.getDate()); // günler(1-31)
console.log("gün:", date.getDay()); // pazar(0), pazartesi(1), cumartesi(6)
console.log("saat:", date.getHours()); // 0-23
console.log("dakika:", date.getMinutes()); // 0-59
console.log("saniye:", date.getSeconds()); // 0-59
console.log("geçen süre:", date.getTime()); //1 Ocak 1970 ile 4 Ocak 2020 arasında geçen saniye sayısı 00:56:41
/* *************************************************************************************** */

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()

let months = [
    "ocak",
    "şubat",
    "mart",
    "nisan",
    "mayıs",
    "haziran",
    "temmuz",
    "ağustos",
    "eylül",
    "ekim",
    "kasım",
    "aralık",
]

let days = [
    "pazar",
    "pazartesi",
    "salı",
    "çarşamba",
    "perşembe",
    "cuma",
    "cumartesi",
]

let humanReadableDate = `okunabilir tarih: ${day} ${months[month]} ${year} ${days[dayNumber]} ${hour}:${minute}:${second}`
console.log(humanReadableDate)
/* *************************************************************************************** */