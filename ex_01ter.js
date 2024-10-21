function submitForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');

    const data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: CryptoJS.MD5(password).toString()
    };

    fetch('http://localhost:3001/validateForm', {  // Changed from 3000 to 3001
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        errorElement.textContent = 'Form submitted successfully!';
        errorElement.style.color = 'green';
    })
    .catch((error) => {
        errorElement.textContent = `An error occurred: ${error.message}`;
        errorElement.style.color = 'red';
    });
}