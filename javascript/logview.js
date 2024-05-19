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
});

function formView(){
    const modalContainer = document.getElementById("userset");
    modalContainer.style.display = "block";
};

document.getElementById("Favbar").addEventListener("click", function(){
    formView();
});
document.getElementById("logbar").addEventListener("click", function(){
    formView();
});