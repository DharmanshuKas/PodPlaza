import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";


import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA69PVgDp-G37PK5pZbs_EW6yuRDAhgLCc",
  authDomain: "podstream-a8d6f.firebaseapp.com",
  projectId: "podstream-a8d6f",
  storageBucket: "podstream-a8d6f.appspot.com",
  messagingSenderId: "807428610300",
  appId: "1:807428610300:web:70c4e5b7d4d289ce209f79"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

signOut(auth).then(() => {
  console.log("Sign-out successful.");
}).catch((error) => {
  console.log("An error happened.");
});