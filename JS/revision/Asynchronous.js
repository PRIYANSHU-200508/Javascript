console.log("Start"); 
setTimeout(() => {
    console.log("Task Complete");
}, 2000); 
console.log("End");




function fetchData(callback) {
    setTimeout(() => {
        callback("Data Received");
    }, 1000);
} 
fetchData((data) => {
    console.log(data);
});



function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received");
        }, 1000);
    }); } 
async function getData() {
    const data = await fetchData();
    console.log(data);
} 
getData();




//more complex example with error handling and validation
async function getUsers() {
  try {
    console.log("Fetching users...");

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const users = await response.json();

    users.forEach(user => {
      console.log(`${user.name} - ${user.email}`);
    });

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Request completed");
  }
}

getUsers();

console.log("Other code is running...");