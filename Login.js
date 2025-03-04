<<<<<<< HEAD
let users = {};
function switchPage(showId) {
    let pages = document.querySelectorAll(".card");
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(showId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
    switchPage("login-card");
});
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
function flipToRegister() {
    document.getElementById("flip-card").classList.add("flipped");
}
function flipToLogin() {
    document.getElementById("flip-card").classList.remove("flipped");
}
function flipToForgot() {
    document.getElementById("flip-card").classList.add("flipped");
}
function validateLogin() {
    let email = document.getElementById("login-email");
    let password = document.getElementById("login-password");
    let emailError = document.getElementById("login-email-error");
    let passwordError = document.getElementById("login-password-error");
    let isValid = true;
    if (!email.value.includes("@") || !email.value.includes(".com")) {
        emailError.textContent = "Invalid email format!";
        emailError.style.display = "block";
        email.classList.add("invalid");
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("invalid");
    }
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        passwordError.style.display = "block";
        password.classList.add("invalid");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        password.classList.remove("invalid");
    }
    if (isValid) {
        alert("Login successful!");
    }
}
function validateRegister() {
    let name = document.getElementById("register-name");
    let email = document.getElementById("register-email");
    let password = document.getElementById("register-password");
    let nameError = document.getElementById("register-name-error");
    let emailError = document.getElementById("register-email-error");
    let passwordError = document.getElementById("register-password-error");
    let isValid = true;
    if (name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty!";
        nameError.style.display = "block";
        name.classList.add("invalid");
        isValid = false;
    } else {
        nameError.style.display = "none";
        name.classList.remove("invalid");
    }
    if (!email.value.includes("@") || !email.value.includes(".com")) {
        emailError.textContent = "Invalid email format!";
        emailError.style.display = "block";
        email.classList.add("invalid");
        isValid = false;
    } else {
        emailError.style.display = "none";
        email.classList.remove("invalid");
    }
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters!";
        passwordError.style.display = "block";
        password.classList.add("invalid");
        isValid = false;
    } else {
        passwordError.style.display = "none";
        password.classList.remove("invalid");
    }
    if (isValid) {
        alert("Registration successful!");
    }
}
function validateForgot() {
    alert("Password reset link has been sent to your email!");
}
