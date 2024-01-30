// function sendMessage (message){
//     console.log("Message: ", message)
// }
// function getMessage(sendMessage){
//     const message = "This message from getMessage() function variable";
//     sendMessage(message);
// }
// getMessage(sendMessage);


/*============ OR ============*/

// Simulating an asynchronous operation (e.g., fetching user data from an API)
function getUserData(userId, callBackFun) {
    setTimeout(() => {
        // Assume fetching data from an API
        const userData = {
            id: userId,
            username: "john_doe",
            email: "john@example.com"
        };

        // Invoke the callback with the fetched data
        callBackFun(null, userData);
    }, 1000); // Simulating a delay of 1 second
}

// Callback function to handle the fetched user data
function displayUserData(error, userData) {
    if (error) {
        console.error("Error fetching user data:", error);
    } else {
        console.log("User data:", userData);
    }
}

// Using the getUserData function with the displayUserData callback
const userId = 123;
getUserData(userId, displayUserData);
