// use of

// async function
// await
// fetch()
// try
// catch
// finally
// throw new Error()
// if validation
// response.ok
// response.json()
// template literals
// return
// console.error() 
 

async function getUserData(userId) {
  try {
    // Input Validation
    if (!userId) {
      throw new Error("User ID is required");
    }

    console.log("Loading user data...");

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // HTTP Error Handling
    if (!response.ok) {
      throw new Error(
        `Request Failed! Status: ${response.status}`
      );
    }

    const user = await response.json();

    // Custom Validation
    if (!user.name) {
      throw new Error("User name not found");
    }

    console.log("User Found:");
    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("Website:", user.website);

    return user;

  } catch (error) { 
    console.error("Error:", error.message);

    return {
      success: false,
      message: error.message,
    };

  } finally {
    console.log("Request Completed");
  }
}

// Function Call
getUserData(1);

