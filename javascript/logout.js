import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";


import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "podstream.firebaseapp.com",
  projectId: "podstream",
  storageBucket: "podstreamappspot.com",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

signOut(auth).then(() => {
  console.log("Sign-out successful.");
}).catch((error) => {
  console.log("An error happened.");
});
