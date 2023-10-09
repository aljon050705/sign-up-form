password = document.getElementById("password")
confirmpassword = document.getElementById("confirmpassword")
error = document.getElementById("error")

function validatePassword() {
    console.log(confirmpassword.value)
    if (password.value !== confirmpassword.value) {
        error.textContent = "Password doesn't match";
        confirmpassword.classList.add("invalid");
    } else {
        error.textContent = "";
        confirmpassword.classList.remove("invalid");
    }
}

password.addEventListener("input", validatePassword);
confirmpassword.addEventListener("input", validatePassword);

