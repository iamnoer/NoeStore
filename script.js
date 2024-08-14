// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (username !== 'noer' || password !== '1234') {
            //  'Invalid username or password.';
            alert('username dan password salah.');
            return;
        }
    
     window.location.href ='latihancss2/css2.html'

        // For real application, you might want to handle form data here
        // Example: Send data to server using fetch() or XMLHttpRequest
    });
});
