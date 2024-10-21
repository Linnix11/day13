function handleSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    errorElement.textContent = '';

    if (firstName.trim() === '') {
        errorElement.textContent = 'First name must not be empty';
        return;
    }

    if (lastName.trim() === '') {
        errorElement.textContent = 'Last name must not be empty';
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = 'Email is badly formatted';
        return;
    }

    if (password.length <= 7) {
        errorElement.textContent = 'Password must be at least 8 characters long';
        return;
    }
    
    if (!/[A-Za-z]/.test(password) || !/\d/.test(password)) {
        errorElement.textContent = 'Password must contain at least a letter and a number';
        return;
    }

    alert('Form submitted successfully!');
}