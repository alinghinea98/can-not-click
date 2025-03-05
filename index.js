const form = document.getElementById('registrationForm');
const buttonWrapper = document.getElementById('buttonWrapper');
const registerButton = document.getElementById('registerButton');

function isFormValid() {
    return form.checkValidity();
}

// Add mouseenter event listener to the button wrapper
buttonWrapper.addEventListener('mouseenter', () => {
    if (!isFormValid()) {
        // Move the button left or right randomly
        const moveDistance = Math.random() > 0.5 ? 100 : -100;
        registerButton.style.setProperty('--move-distance', moveDistance);
        registerButton.classList.add('move-button');
    }
});

// Reset the button position when the mouse leaves the wrapper
buttonWrapper.addEventListener('mouseleave', () => {
    registerButton.classList.remove('move-button');
});

// Prevent form submission if any required field is empty
form.addEventListener('submit', (e) => {
    if (!isFormValid()) {
        e.preventDefault();
        alert('Please fill out all required fields.');
    } else {
        alert('Registration successful!');
    }
});
