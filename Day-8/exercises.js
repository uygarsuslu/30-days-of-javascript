// ****** Exercises: Level 1  ****** //

let dog = {};
console.log(dog);
dog.name = "jasper";
dog.legs = 4;
dog.color = "brown"
dog.age = 4;
dog.bark = function () {
    console.log("woof woof woof")
}
console.log(Object.values(dog));
dog.breed = "german shepherd";
dog.getDogInfo = function () {
    console.log(Object.values(this));
}
console.log(Object.values(dog));
/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** Exercises: Level 2  ****** //

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
/* *************************************************************************************** */

// ****** Find the person who has many skills in the users object ****** //

let winner;
let max = 0

for (const property in users) {
    if (users[property].skills.length > max) {
        max = users[property].skills.length;
        winner = property
    }
}
console.log(winner);
/* *************************************************************************************** */

// ****** Use the countries object to print a country name, capital, populations and languages ****** //

let country = {
    name: "Turkey",
    capital: "Ankara",
    populations: "5 billion",
    languages: ["Turkish", "English"]
}
console.log(`${country.name}\n${country.capital}\n${country.populations}\n${country.languages}`);
/* *************************************************************************************** */
console.log("///////////////////////////////////////////////////////////////////////////")

// ****** Exercises: Level 3  ****** //

// ****** 1- Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description ****** //

let personAccount = {
    firstName: "victor",
    lastName: "kenneth",
    income: {
        freelancing: 10000,
        menialLabour: 2000
    },
    expenses: {
        data: 500,
        food: 1000,
        transport: 500
    },
    totalIncome: function () {
        let tIncome = 0;
        let values = Object.values(this.income);
        for (let i = 0; i < values.length; i++) {
            tIncome += values[i]
        }
        return tIncome;
    },
    totalExpenses: function () {
        let tExpenses = 0;
        let values = Object.values(this.expenses);
        for (let i = 0; i < values.length; i++) {
            tExpenses += values[i]
        }
        return tExpenses
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${Object.entries(this.expenses)
            }
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}
                `
    }
}
console.log(personAccount);
/* *************************************************************************************** */

// ****** 2- Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. b.Create a function called signIn which allows user to sign in to the application ****** //

const user1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
/* *************************************************************************************** */

const signUp = (username, email, password) => {
    user1.forEach(user => {
        if (user.username === username && user.password === password) {
            console.log("you already have an account")
        } else {
            let date = new Date()
            let chars = "abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            user1.push({
                _id: id,
                username: username,
                email: email,
                password: password,
                createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
                isLoggedIn: "false"
            })
        }
    })
    console.log(user1[user1.length - 1]);
}
// console.log(signUp("Brook", 'brook@brook.com', '123222'));

const signIn = (username, password) => {
    for (let i = 0; i < user1.length; i++) {
        if (user1[i].username.toLowerCase() === username.toLowerCase() && user1[0].password === password) {
            return user1[i];
        } else {
            return "wrong username or password";
        }
    }
    console.log(foundUser)
}
// console.log(signIn("Brook", '123222'));
/* *************************************************************************************** */

// ****** 3- The product array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product ****** //

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
/* *************************************************************************************** */

const rateProduct = (name, rate) => {
    products.forEach(product => {
        if (product.name.toLowerCase().includes(name)) {
            let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            product.ratings.push({
                userId: id,
                rate: rate
            })
            console.log("filter");
        } else {
            console.log("no product to rate")
        }
    })
};

const avgRating = (name) => {
    let avg = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            products[i].ratings.rate.forEach(rating => {
                count++
                avg += rating
            })
        }
    }
    avg = avg / count
}
/* *************************************************************************************** */

// ****** 4- Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked ****** //

const likeProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {

            if (!products[i].likes) {
                console.log(like);
                let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(chars[Math.floor(Math.random() * chars.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
}
rateProduct("tv", "4.5");
avgRating("mobile phone");
likeProduct("mobile phone");