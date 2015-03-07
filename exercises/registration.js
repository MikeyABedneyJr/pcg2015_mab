document.addEventListener("DOMContentLoaded", function () {
    var regForm = document.getElementById("registration");

    function validateForm() {
        /* how could we organize this code and make it more reusable? */
        var errors = document.getElementById("errors");
        var error_list = [];
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var verifyPassword = document.getElementById("verify_password").value;
        var dobValue = document.getElementById("dob").value;
        var dob = new Date(dobValue);
        var now = new Date();
        var ageDiff = new Date()
        var nowMS = now.getTime();
        var dobMS = dob.getTime();
        var iDiff= nowMS - dobMS;
        ageDiff.setTime(iDiff);
        var age = parseInt(ageDiff.getFullYear()) - 1970;

        if (password != verifyPassword) {
            error_list.push("Password and Verify Password must match");
        }

        if (password.length < 8) {
            error_list.push("Password must be at least 8 letters or numbers.");
        }

        if (username.length < 3) {
            error_list.push("Username must be at least 3 letters or numbers.");
        }

        if (email.length < 3) {
            error_list.push("Email must be at least 3 letters or numbers.");
        }

        if (age < 21) {
            error_list.push("Age must be over 21");
        }

        errors.innerHTML = error_list.join("<br>");
    }
    regForm.addEventListener("submit", function(event){
        event.preventDefault();
        validateForm();
    });
}) ;