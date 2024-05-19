import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA69PVgDp-G37PK5pZbs_EW6yuRDAhgLCc",
    authDomain: "podstream-a8d6f.firebaseapp.com",
    projectId: "podstream-a8d6f",
    storageBucket: "podstream-a8d6f.appspot.com",
    messagingSenderId: "807428610300",
    appId: "1:807428610300:web:70c4e5b7d4d289ce209f79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('forget');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById('email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Email has been sent")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });

})