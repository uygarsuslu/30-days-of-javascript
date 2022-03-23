// ****** Creating an objecting with values ****** //

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    city: 'Helsinki',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python'
    ],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    getFullName2: () => `${person.firstName} ${person.lastName}`, // this olursa undefined olur
    test: {
        deneme: "deneme text"
    },
    'phone number': '+3584545454545'
}

/* *************************************************************************************** */

// ****** We can access values of object using two methods: ****** //

console.log(person.firstName)
console.log(person['firstName'])

console.log(person.location) // undefined
console.log(person['location']) // undefined

console.log(person['phone number']) // arasında boşluk olduğu için "." ile yazdıramayız !!!!!

console.log(person.skills)
console.log(person['skills'])
console.log(person.skills[0])

console.log(person.address.street);

let keyName = "age"
console.log(person[keyName]);

console.log(person.getFullName()); // Asabeneh Yetayeh
console.log(person.getFullName2()); // this olsaydı "undefined undefined" çıktısı verirdi

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** setting new key for an object ****** //

person.country = 'Turkey'
person.title = 'Developer'
person.skills.push('Svelte')

// ****** List Format () ****** //

const formatter = new Intl.ListFormat("en",
    {
        style: "long",
        type: "conjunction"
    }
);

person.getPersonInfo2 = function () {
    let skills = formatter.format(this.skills)
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person.getPersonInfo2())

/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** setting new key for an object ****** //

person.firstName = 'Uygar'
person.lastName = 'Süslü'

person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(", ")
    let lastSkill = this.skills.at(-1)

    let skills = `${skillsWithoutLastSkill} and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person.getPersonInfo())

/* *************************************************************************************** */
console.log("////////////////////////////////////////////////////////////////////////////")

// ****** OBJECT METHODS ****** //

// Object.assign // // orijinal objeyi bozmadan kopyalama //

// referanslı kopyalama // 
let newPerson1 = person
console.log(person); // firstname : Uygar
newPerson1.firstName = "Ahmet"
console.log(person); // firstname : Ahmet

// referanssız kopyalama //
let newPerson2 = Object.assign({}, person)
newPerson2.firstName = "Kadir"
console.log(person); // firstname : Ahmet
console.log(newPerson2); // firstname : Kadir

console.log("///////////////////////////////////////////////////////////////////////////")

// Object.keys //

const keys = Object.keys(person)
console.log(keys);

const address1 = Object.keys(person.address)
console.log(address1);

console.log("///////////////////////////////////////////////////////////////////////////")

// ****** object.values ****** //

const values = Object.values(person)
console.log(values)

const address2 = Object.values(person.address)
console.log(address2);

console.log("///////////////////////////////////////////////////////////////////////////")

// ****** object.entries ****** //

const entries = Object.entries(person)
console.log(entries)

// console.log("///////////////////////////////////////////////////////////////////////////")
// for (let [key, val] of Object.entries(person))
//     console.log(key, val);

console.log("///////////////////////////////////////////////////////////////////////////")

// ****** hasOwnProperty ****** //

console.log(person.hasOwnProperty('firstName'))
console.log(person.hasOwnProperty('score'))

console.log("///////////////////////////////////////////////////////////////////////////")

// ****** Object.freeze = obje içindekiler değiştirilemez ****** //

Object.freeze(person) // baştaki objenin altında tanımlarsak sonrasında yaptığımız değişiklikler gözükmez //
console.log(person);

console.log("///////////////////////////////////////////////////////////////////////////")

// ****** Object.seal = yeni bir şey eklemeye izin vermiyor ama mevcut olan objenin değerleri güncellenir ****** //

Object.seal(person) // baştaki objenin altında tanımlarsak sonrasında yaptığımız eklemeler gözükmez //
console.log(person);