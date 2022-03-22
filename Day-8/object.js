// ****** getting values from an object ****** //

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    city: 'Helsinki',
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
    getFullName2: () => `${person.firstName} ${person.lastName}`,
    test: {
        deneme: "deneme text"
    },
    'phone number': '+3584545454545'
}

console.log(person.firstName)
console.log(person['firstName'])

console.log(person.lastName)
console.log(person['lastName'])

console.log(person.age)
console.log(person['age'])

console.log(person.location) // undefined
console.log(person['location']) // undefined

console.log(person['phone number']) // arasında boşluk olduğu için "." ile yazdıramayız !!!!!

console.log(person.skills)
console.log(person['skills'])
console.log(person.skills[0])

console.log(person.test.deneme);

let keyName = "age"
console.log(person[keyName]);

console.log(person.getFullName());
console.log(person.getFullName2());

/* *************************************************************************************** */

console.log("////////////////////////////////////////////////////////////////////////////")

// ****** setting new key for an object ****** //

person.country = 'Turkey'
person.title = 'Developer'
person.skills.push('Svelte')

console.log(person.title)
console.log(person.skills)

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

// ****** List Format () ****** //

person.firstName = 'Uygar'
person.lastName = 'Süslü'

const formatter = new Intl.ListFormat("en",
    {
        style: "long",
        type: "conjunction"
    }
);

// burada skills'de sadece "svelte" yazmasının sebebi üstteki örnek //
person.getPersonInfo2 = function () {
    let skills = formatter.format(this.skills)
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
console.log(person.getPersonInfo2())

/* *************************************************************************************** */

console.log("///////////////////////////////////////////////////////////////////////////")

// ****** object methods ****** //

// referanslı kopyalama // 
let newPerson1 = person
console.log(person); // firstname : Uygar
newPerson1.firstName = "Ahmet"
console.log(person); // // firstname : Ahmet

// referanssız kopyalama //
let newPerson2 = Object.assign({}, person)
newPerson2.firstName = "Kadir"
console.log(person); // firstname : Ahmet
console.log(newPerson2); // firstname : Kadir

/* *************************************************************************************** */
