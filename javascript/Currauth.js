import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";


import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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
const stats = false;

onAuthStateChanged(auth, (user) => {
  if (user) {
    stats = true;
    console.log("signed in...")
    offform();
    // const uid = user.uid;
    // ...
  } else {
    console.log("signed out...");
    offform();
    // User is signed out
    // ...
  }
});

function offform(){
    const modalContainer = document.getElementById("userset");
    if(stats == true){
        modalContainer.style.display = "none";
    }

}
    
    // function formView(){
    //     const modalContainer = document.getElementById("userset");
    //     modalContainer.style.display = "block";
    // };
    
    // document.getElementById("Favbar").addEventListener("click", function(){
    //     formView();
    // });
    // document.getElementById("logbar").addEventListener("click", function(){
    //     formView();
    // });
// }

// while (stats == true){

    
// }