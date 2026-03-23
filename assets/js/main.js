const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");

// Signup inputs
const fullNameInput = document.getElementById("fullname");
const emailInputSignUp = document.getElementById("email");
const passwordInputSignUp = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Signin inputs
const emailInputSignIn = document.getElementById("email");
const passwordInputSignIn = document.getElementById("password");

// Toggle buttons
const togglePasswordBtns = document.querySelectorAll(".input-toggle-password");

// Toggle Password
togglePasswordBtns.forEach((btn) => {
  const targetInputId = btn.getAttribute("aria-controls");
  const targetInput = document.getElementById(targetInputId);

  btn.addEventListener("click", () => {
    const isPassword = targetInput.type === "password";
    targetInput.type = isPassword ? "text" : "password";
    btn.innerHTML = isPassword
      ? '<i class="fa-regular fa-eye-slash"></i>'
      : '<i class="fa-regular fa-eye"></i>';
  });
});

// Signup Validation
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Full name
    if (!fullNameInput.value.trim()) {
      document.getElementById("fullname-error").textContent =
        "Please enter your full name.";
      valid = false;
    } else {
      document.getElementById("fullname-error").textContent = "";
    }

    // Email
    if (!emailInputSignUp.value.trim()) {
      document.getElementById("email-error").textContent =
        "Please enter your email.";
      valid = false;
    } else if (!emailInputSignUp.value.includes("@")) {
      document.getElementById("email-error").textContent =
        "Email must include @.";
      valid = false;
    } else {
      document.getElementById("email-error").textContent = "";
    }

    // Password
    if (!passwordInputSignUp.value) {
      document.getElementById("password-error").textContent =
        "Please enter a password.";
      valid = false;
    } else if (passwordInputSignUp.value.length < 8) {
      document.getElementById("password-error").textContent =
        "Password must be at least 8 characters.";
      valid = false;
    } else {
      document.getElementById("password-error").textContent = "";
    }

    // Confirm password
    if (!confirmPasswordInput.value) {
      document.getElementById("confirm-password-error").textContent =
        "Please confirm your password.";
      valid = false;
    } else if (confirmPasswordInput.value !== passwordInputSignUp.value) {
      document.getElementById("confirm-password-error").textContent =
        "Passwords do not match.";
      valid = false;
    } else {
      document.getElementById("confirm-password-error").textContent = "";
    }

    // Redirect if valid
    if (valid) {
      window.location.href = "dashboard.html";
    }
  });
}

// Signin Validation
if (signinForm) {
  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Email
    if (!emailInputSignIn.value.trim()) {
      document.getElementById("email-error").textContent =
        "Please enter your email.";
      valid = false;
    } else if (!emailInputSignIn.value.includes("@")) {
      document.getElementById("email-error").textContent =
        "Email must include @.";
      valid = false;
    } else {
      document.getElementById("email-error").textContent = "";
    }

    // Password
    if (!passwordInputSignIn.value) {
      document.getElementById("password-error").textContent =
        "Please enter your password.";
      valid = false;
    } else {
      document.getElementById("password-error").textContent = "";
    }

    // Redirect if valid
    if (valid) {
      window.location.href = "dashboard.html";
    }
  });
}
