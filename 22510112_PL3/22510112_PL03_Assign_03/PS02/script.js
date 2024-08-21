function validatePassword() {
    const password = document.getElementById('passwordInput').value;
    const resultElement = document.getElementById('validationResult');

    const isValid = validate(password);

    if (isValid) {
        resultElement.textContent = 'Password is valid.';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Password is invalid. It must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        resultElement.style.color = 'red';
    }
}

function validate(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
}