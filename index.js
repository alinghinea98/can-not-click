const form = document.getElementById('registrationForm');
const buttonWrapper = document.getElementById('buttonWrapper');
const registerButton = document.getElementById('registerButton');

let moveDirection = 'left';

function isFormValid() {
    return form.checkValidity();
}

// Function to move the button left or right
function moveButton() {
    if (!isFormValid()) {
        if (moveDirection === 'left') {
            registerButton.classList.remove('move-right');
            registerButton.classList.add('move-left');
            moveDirection = 'right';
            return;
        }
        registerButton.classList.remove('move-left');
        registerButton.classList.add('move-right');
        moveDirection = 'left';
    }
}

// Move the button when the user hovers over the wrapper
buttonWrapper.addEventListener('mouseenter', () => {
    if (!isFormValid()) {
        moveButton();
    }
});

// Move the button again when the user tries to reach it
registerButton.addEventListener('mouseenter', () => {
    if (!isFormValid()) {
        moveButton();
    }
});

// Prevent form submission if any required field is empty
form.addEventListener('submit', (e) => {
    if (!isFormValid()) {
        e.preventDefault();
        alert('Please fill out all required fields.');
        return;
    }
    alert('Registration successful!');
});
