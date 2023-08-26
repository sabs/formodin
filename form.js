
const pwdValidationField = document.getElementById('pwdval');

pwdValidationField.addEventListener("input", (event) => {
    const pwdField = document.getElementById('password');
    if (this.value !== pwdField.value) {
        pwdValidationField.setCustomValidity("Passwords must match");
        pwdField.setCustomValidity("Passwords must match");
    } else {
        pwdValidationField.setCustomValidity("");
        pwdField.setCustomValidity("");
        
    }
});