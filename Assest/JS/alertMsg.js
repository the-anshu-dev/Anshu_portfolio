    /* script.js */
    function showCustomAlert(message) {
        var customAlert = document.getElementById("customAlert");
        var alertContent = customAlert.querySelector(".alert-content");
        var okButton = customAlert.querySelector("button");
        var messageElement = alertContent.querySelector("p");
        
        messageElement.innerText = message;
        
        customAlert.style.display = "flex";
        okButton.focus(); // Focus the OK button to allow keyboard interaction
    }
    
    function closeCustomAlert() {
        var customAlert = document.getElementById("customAlert");
        customAlert.style.display = "none";
    }
    
    // Example usage:
    window.onload = function() {
        showCustomAlert("For Better Experience Please Open In DESKTOP MODE");
    };