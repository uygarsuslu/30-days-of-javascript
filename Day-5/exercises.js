// ****** get the first item, the middle item and the last item of the array ****** //

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
let lastIndex = (countries.length - 1)
let middleIndex = (countries.length - 1) / 2
console.log("first:", countries[0])
console.log("middle:", countries[middleIndex])
console.log("last:", countries[lastIndex])
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies. ****** //

const technology = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
technology.pop()
let item = technology.join(", ")
console.log("sentence:", `${item} and Amazon are big IT companies.`)
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** in the following shopping cart add, remove, edit items ****** //

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// add 'Meat' in the beginning of your shopping cart if it has not been already added
const control1 = (shoppingCart.includes("Meat"))
if (control1 == false) {
    (shoppingCart.unshift("Meat"))
}
console.log("unshift:", shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
const control2 = (shoppingCart.includes("Sugar"))
if (control2 == false) {
    (shoppingCart.push("Sugar"))
}
console.log("includes:", shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart.splice(3, 1, "Green Tea")
console.log("splice:", shoppingCart);
/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** the following is an array of 10 students ages: ****** //
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// sort the array and find the min and max age
console.log("sort:", ages.sort()) // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

console.log("min:", ages[0]) // 19

const lastIndex2 = ages.length - 1
console.log("max:", ages[lastIndex2]) // 26
/* *************************************************************************************** */