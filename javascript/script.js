// function loadSearchContent() {
//     const searchcontent = document.getElementById("searchcontent");

//     fetch('search.html')
//         .then(response => response.text())
//         .then(content => {
//             searchcontent.innerHTML = content;
//             history.pushState(null, '', '/search');
//         })
//         .catch(error => console.log('Error fetching file:', error));
// }

// document.getElementById("searchbar").addEventListener("click", function() {
//     let dashboard = document.getElementById("dashboard");
//     dashboard.style.display = "none";

//     loadSearchContent();
// });


// document.getElementById("dashbar").addEventListener("click", function() {
//     let dashboard = document.getElementById("dashboard");
//     dashboard.style.display = "block";

//     document.getElementById("searchcontent").innerHTML = "";
// });

// Function to load search content
function loadSearchContent() {
    const searchcontent = document.getElementById("searchcontent");

    fetch('../html/search.html')
        .then(response => response.text())
        .then(content => {
            searchcontent.innerHTML = content;
            history.pushState({ page: 'search' }, '', '/search');
        })
        .catch(error => console.log('Error fetching file:', error));
}

function loadDashboardContent() {
    const dashboard = document.getElementById("dashboard");
    dashboard.style.display = "block";

    const searchContent = document.getElementById("searchcontent");
    searchContent.innerHTML = "";
}

document.getElementById("searchbar").addEventListener("click", function() {
    const dashboard = document.getElementById("dashboard");
    dashboard.style.display = "none";

    loadSearchContent();
});

document.getElementById("dashbar").addEventListener("click", function() {
    history.pushState({ page: 'index.html' }, '', '/index.html');
    // const serchboard = document.getElementById("searchbar");
    // serchboard.style.display = "none";
    loadDashboardContent();
});

window.addEventListener('popstate', function(event) {
    const state = event.state;
    if (state && state.page === 'search') {
        loadSearchContent();
    } else {
        loadDashboardContent();
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginout");
    const modalContainer = document.getElementById("userset");
    const closeModal = document.querySelector(".close");

    loginButton.addEventListener("click", function() {
        modalContainer.style.display = "block";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";
        }
    });

    closeModal.addEventListener("click", function() {
        modalContainer.style.display = "none";
    });

    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted!");
    });
});

document.getElementById("spanCreteLog").addEventListener("click",function(){
    headform = document.getElementById("formPage");
    headform.innerHTML = "Sign Up";
    console.log(headform);

    document.getElementById("userbox").style.display = "flex";

    h4con = document.querySelector("#Askuser h4 span");
    h4con.innerHTML = "Already have an account ? "
    
    spancon = document.getElementById("spanCreteLog");
    spancon.innerHTML = " Sign in"
    console.log(h4con);
    console.log(spancon);
});

document.getElementById("closeF").addEventListener("click", function(){
    headform = document.getElementById("formPage");
    headform.innerHTML = "Sign In";
    console.log(headform);

    document.getElementById("userbox").style.display = "none";

    h4con = document.querySelector("#Askuser h4 span");
    h4con.innerHTML = "Don't have an account ? "
    
    spancon = document.getElementById("spanCreteLog");
    spancon.innerHTML = " Create Account"
    console.log(h4con);
    console.log(spancon);    
});

function formView(){
    const modalContainer = document.getElementById("userset");
    modalContainer.style.display = "block";
};

document.getElementById("Favbar").addEventListener("click", function(){
    formView();
});
document.getElementById("Uploadbar").addEventListener("click", function(){
    formView();
});
document.getElementById("logbar").addEventListener("click", function(){
    formView();
});

document.getElementById("Menubtn").addEventListener("click", function() {
    document.querySelector(".left").classList.toggle("hidden");
    document.querySelector(".right").classList.toggle("full-width");
    document.querySelector(".top-R").classList.toggle("top-R-B")
});

document.getElementById("Modetheme").addEventListener("click", ()=> {

    const themeText = document.querySelector("#Modetheme h5");
    const themeImage = document.querySelector("#Modetheme img");

    const isLightMode = themeImage.src.includes("light.svg");

    if (isLightMode) {
        themeImage.src = "../Image/darkmode.svg";
        themeText.innerHTML = "Dark Mode";
    } else {
        themeImage.src = "../Image/light.svg";
        themeText.innerHTML = "Light Mode";
    }

    // themeC = document.querySelector("#Modetheme h5")
    // document.querySelector("#Modetheme img").toggle.src = "darkmode.svg"
    // themeC.innerHTML = "Dark Mode";
    

    document.querySelector(".left").classList.toggle("left-L")
    document.querySelector(".top-R").classList.toggle("top-R-L")
    document.querySelector(".right").classList.toggle("right-L")
    const allbox = document.querySelectorAll(".card-box");
    allbox.forEach(element => element.classList.toggle("card-box-L"));
    const elements = document.querySelectorAll(".invert");
    elements.forEach(element => element.classList.toggle("invert-L"));
    const textC = document.querySelectorAll(".colorWhite");
    textC.forEach(element => element.classList.toggle("colorWhite-L"));
    const cardnBg = document.querySelectorAll(".card-n");
    cardnBg.forEach(element => element.classList.toggle("card-n-L"));
    document.querySelector(".login-content").classList.toggle("login-content-L")
    // document.querySelector(".Hastg h1").classList.toggle("Hastg-L")
    const tagBg = document.querySelectorAll(".hastg");
    tagBg.forEach(element => element.classList.toggle("hastg-L"));
    
    
})

const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeclose");

eyeIcon.addEventListener("click", function() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "../Image/eye unvis.svg";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "../Image/eye visible.svg";
    }
    passwordInput.preventDefault();
});


function loadSearch() {
    const searchdetail = document.getElementById("CastEpisode");

    fetch('../html/podcastEP.html')
        .then(response => response.text())
        .then(content => {
            searchdetail.innerHTML = content;
        })
        .catch(error => console.log('Error fetching file:', error));
}

document.querySelectorAll(".playPod").forEach(element => {
    element.addEventListener("click", function() {
        document.getElementById("dashboard").style.display = "none";
        loadSearch();
    });
});