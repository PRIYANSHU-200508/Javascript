console.log("loop")

/* for loop 
let a = 1;
for (let i = 0; i < 10; i++) { 
    console.log(a + i);
}    
*/


/* for in loop  
let object = {
    Name : "priyanshu",
    class : "b.tech"
}
for (const key in object) { 
    const element = object[key];
    console.log(key, element) 
} 
*/

/* while loop
let i  = 5;
while (i<10) {
    console.log(i)
    i++;
}
*/

/* do while loop
let i =1;
do {
    console.log(i)
    i++;
} while (i<10);
*/

/*
console.log("foreach loop in array")
   
let arr = [1, 2, 4, 6] 

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//  console.log(element)   
// }

arr.forEach((e, index, arr) => {
    console.log(e, index, arr) 
});
*/
/*
console.log("forin loop in array")
let object = {
    Name : "priyanshu",
    class : "b.tech"
}
for (const key in object) { 
    const element = object[key];
    console.log(key, element) 
}
*/


console.log("forof loop in array")

let arr = [1, 2, 4, 6] 

for (const element of arr) {
    
    console.log(  element) 
}