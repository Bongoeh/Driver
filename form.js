// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8pveRiKbJZShCVnW5WlxNbsTOAIFhsq4",
    authDomain: "myweb-c4c25.firebaseapp.com",
    projectId: "myweb-c4c25",
    storageBucket: "myweb-c4c25.appspot.com",
    messagingSenderId: "413167663570",
    appId: "1:413167663570:web:d755c70c18babd728b700b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Add event listener to the submit button
document.querySelector('.submit-btn').addEventListener("click", function (event) {
    event.preventDefault();

    // Get email and password from the form inputs
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Account created successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
