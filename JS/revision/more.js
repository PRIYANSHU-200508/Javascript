// //JavaScript Template literals 

// let name = "John";
// let age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);   
// let a = 5;
// let b = 10;
// console.log(`The sum of ${a} and ${b} is ${a + b}.`);


// //Asynchronous JavaScript
// console.log("Start");   
// setTimeout(() => {
//     console.log("Task Complete");
// }, 2000);
// console.log("End"); 

// //Asynchronous JavaScript with Callbacks
// function fetchData(callback) {
//     setTimeout(() => {
//         callback("Data Received");
//     }, 1000);   
// }
// fetchData((data) => {
//     console.log(data);
// }); 


// //Multi-line String
// const multiLineString = `This is a multi-line string.
// It can span multiple lines without needing escape characters.`;
// console.log(multiLineString);   


// //String Interpolation
// const firstName = "Jane";
// const lastName = "Doe";
// console.log(`Hello, ${firstName} ${lastName}!`);


// //Expression Evaluation
// const x = 10;
// const y = 20;
// console.log(`The product of ${x} and ${y} is ${x * y}.`);   


// //Complex Example with Template Literals
// const user = {
//     name: "Alice",
//     age: 25,    
//     hobbies: ["reading", "traveling", "coding"]
// };
// console.log(`User Info: Name: ${user.name}, Age: ${user.age}, Hobbies: ${user.hobbies.join(", ")}`);


// //Error Handling in JavaScript
// try {
//   console.log(x); // x is not defined   
// } catch (error) {
//   console.log("Error:", error.message);
// }


// //classes in JavaScript
// class Person {
//     constructor(name, age) {    
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }   
// }
// const person1 = new Person("Bob", 40);
// person1.greet();
// const person2 = new Person("Eve", 35);
// person2.greet();
// const person3 = new Person("Charlie", 28);
// person3.greet();    

console.log("Start");
setTimeout(() => {
    console.log("Task Complete");
}, 2000);
console.log("End");


//Asynchronous JavaScript with Promises
function fetchData() {
    return new Promise((resolve) => {       
        setTimeout(() => {
            resolve("Data Received");
        }, 1000);
    });
}

//Using Promises with .then()
fetchData().then((data) => {
    console.log(data);
}); 


/*

.then() ka matlab hai:
➡️ "Jab kaam complete ho jaye, tab ye code chalao."

console.log("Start"); 
Promise.resolve()
  .then(() => {
    console.log("Kaam ho gaya");
  }); 
console.log("End");

JavaScript ne Promise wala kaam side me rakh diya aur baaki code pehle chala diya. Jab Promise complete hua, tab .then() ke andar wala code chala. Isliye output aise aata hai:

*/