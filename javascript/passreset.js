import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "APIKEY",
  authDomain: "podstream.firebaseapp.com",
  projectId: "podstream",
  storageBucket: "podstreamappspot.com",
  messagingSenderId: "",
  appId: ""
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
