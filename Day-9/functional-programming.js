// ****** forEach()   ****** //

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log("forEach: ", num)) // 1 2 3 4 5 

///////////////////////////////////////////////////////////////////////////////////

const number = [1, 3, 5, 7, 9]
let total = 0
let calculate = (num, index) => total += (num + index)
number.forEach(calculate)
console.log("forEach: ", total); // 35

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** map() ****** //

const number1 = [2, 4, 6, 8, 10]
const number1Square = number1.map(num => num * num)
console.log("map: ", number1Square); // [4, 16, 36, 64, 100]

///////////////////////////////////////////////////////////////////////////////////

const userName = ["Uygar", "Süslü", "Gökalp", "Avcu"]
const namesToUpperCase = userName.map(name => name.toUpperCase())
console.log("map: ", namesToUpperCase); // ['UYGAR', 'SÜSLÜ', 'GÖKALP', 'AVCU']

///////////////////////////////////////////////////////////////////////////////////

let users = [

    {
        id: 2,
        name: "Ömer",
        age: 22,
        gender: 1
    },
    {
        id: 1,
        name: "Tayfun",
        age: 29,
        gender: 1
    },
    {
        id: 4,
        name: "Yaren",
        age: 18,
        gender: 2
    },
    {
        id: 3,
        name: "Ali",
        age: 31,
        gender: 1
    }
]

users = users.map(user => {
    if (user.id === 2) {
        user.name = "Hakan"
    }
    return user
})
console.log("map: ", users);

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** filter()  ****** //
// yukarıdaki user üzerinden işlem yaptım

const women = users.filter(user => user.gender === 2);
console.log("filter: ", women) // {id: 4, name: 'Yaren', age: 18, gender: 2}
const men = users.filter(user => user.gender === 1 && user.age < 25);
console.log("filter: ", men) //  {id: 2, name: 'Hakan', age: 22, gender: 1}

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** every()  ****** //
// yukarıdaki user üzerinden işlem yaptım

const gender = users.every(user => user.gender === 1)
console.log("every: ", gender); // false

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** some()  ****** //

const gender1 = users.some(user => user.gender === 1)
console.log("some: ", gender1); // true

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** reduce()  ****** //

const number2 = [1, 2, 3, 4, 5]
const sum2 = number2.reduce((acc, cur) => acc + cur, 0)
console.log("reduce: ", sum2);
// const sum2 = number2.reduce((acc, cur) => {
//    return acc + cur
// },0)

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** find()  ****** //

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find(age => age > 20)
console.log("find: ", age); // 24

///////////////////////////////////////////////////////////////////////////////////

const id = users.find(user => user.id === 3)
console.log("find: ", id); // {id: 3, name: 'Ali', age: 31, gender: 1}

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** findIndex()  ****** //

const ages1 = [24, 22, 25, 32, 35, 18]
const age1 = ages1.findIndex(age1 => age1 > 20)
console.log("find: ", age1); // 0 

///////////////////////////////////////////////////////////////////////////////////

const id1 = users.findIndex(user => user.id === 3)
console.log("find: ", id1); // 3

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** sort()  ****** //

// string values
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"]
console.log("sort: ", products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']

// numeric values
const nums = [3, 10, 3.5, 6, 2, 1, 9]
console.log("sort: ", nums.sort((a, b) => { return a - b })) // [1, 2, 3, 3.5, 6, 9, 10]
console.log("sort: ", nums.sort((a, b) => { return b - a })) // [10, 9, 6, 3.5, 3, 2, 1]

// localCompare 
console.log(products.sort((a, b) => b.localeCompare(a))) // ['Sugar', 'Milk', 'Honey', 'Coffee', 'Carrot', 'Apple']

// users dizisi (id) !!!
console.log(users.sort((a, b) => b.id - a.id))

// users dizisi (localCompare) !!!
console.log(users.sort((a, b) => b.name.localeCompare(a.name)))

/* *************************************************************************************** */