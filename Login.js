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
