// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";


import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

const srcchange = document.getElementById('logfm');

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const resetform = document.getElementById('loginForm');
  const srcchange = document.getElementById('logfm');
  const loader = document.getElementById('loader');

  loader.style.display = 'block';


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      loader.style.display = 'none';

      const user = userCredential.user;
      // alert("Sign In...")
      // a = window.location.href = "index.html";
      const userr = auth.currentUser;

      document.getElementById("formall").style.display = "none";

      if (userr !== null) {
        const email = user.email;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        console.log(email)
        console.log(emailVerified)
        console.log(uid)

      }
      document.getElementById('loghide').innerText = "";
      document.getElementById('logbar').style.display = "none"
      
      const profileCard = document.getElementById('Uprofile');
      const Username = document.getElementById('userN');

      document.getElementById('loginout').addEventListener("click", function () {
        if (profileCard.style.display === "none") {
        profileCard.style.display = "block";
        } else {
        profileCard.style.display = "none";
        }
        Username.innerText = user.email;
      });
      

      resetform.reset();
      // // srcchange.src = 'form.js'; 
      // console.log(srcchange.src);
      // console.log("checked");



      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      loader.style.display = 'none';

      // ..
    });
})



