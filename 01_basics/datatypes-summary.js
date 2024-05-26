// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

// const bigNumber = 5656646464646645484496n



//  Reference (Non primitive)

//  Array, Objects, Functions

const heros = ["shaktiman", "superman", "sipderman"]
let myObj = {
    name:"ravi",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "MafiaGaming"

let anothername = myYoutubename
anothername = "Ravi Kant"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "ravi@google.com",
    upi: "ravi@ybl",
}

let userTwo = userOne

userTwo.email = "ravi@google.com"

console.log(userOne.email);
console.log(userTwo.email);
