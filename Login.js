let users = {};
document.addEventListener("DOMContentLoaded", function () {
    switchPage("login-card");
});
function switchPage(showId) {
    let pages = document.querySelectorAll(".card");
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(showId).classList.add("active");
}
function flipToRegister() {
    switchPage("register-card");
}
function flipToLogin() {
    switchPage("login-card");
}
function flipToReset() {
    switchPage("reset-card");
}
function validateLogin() {
    let user = document.getElementById("login-user").value.trim();
    let pass = document.getElementById("login-pass").value.trim();
    if (user === "" || pass === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!users[user] || users[user] !== pass) {
        alert("Invalid username or password.");
        return;
    }
    alert("Login successful!");
}
function validateRegister() {
    let user = document.getElementById("reg-user").value.trim();
    let pass = document.getElementById("reg-pass").value.trim();
    if (user === "" || pass === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (pass.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }
    if (users[user]) {
        alert("Username already exists.");
        return;
    }
    users[user] = pass;
    alert("Registration successful!");
    flipToLogin();
}
function resetPassword() {
    let user = document.getElementById("reset-user").value.trim();
    let newPassword = document.getElementById("new-password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if (user === "" || newPassword === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!users[user]) {
        alert("Username not found.");
        return;
    }
    if (newPassword.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    if (newPassword === users[user]) {
        alert("New password cannot be the same as the old password.");
        return;
    }
    users[user] = newPassword;
    alert("Password has been reset successfully!");
    flipToLogin();
}