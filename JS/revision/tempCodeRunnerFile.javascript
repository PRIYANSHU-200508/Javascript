try {
  console.log(x); // x is not defined
} catch (error) {
  console.log("Error:", error.message);
}



try {
  console.log("Try block");
} catch (error) {
  console.log("Catch block");
} finally {
  console.log("Finally block");
}




const age = 15;
try {
  if (age < 18) {
    throw new Error("You must be 18 or older");
  } 
  console.log("Access Granted");
} catch (error) {
  console.log(error.message);
}



function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    return error.message;
  }
}
console.log(divide(10, 2));
console.log(divide(10, 0));

