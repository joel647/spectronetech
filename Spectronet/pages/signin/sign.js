  // JavaScript for form validation
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Clear previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let hasError = false;

    // Validate username
    const username = document.getElementById('username').value.trim();
    if (!username) {
      document.getElementById('usernameError').textContent = 'Username is required';
      hasError = true;
    }

    // Validate password
    const password = document.getElementById('password').value.trim();
    if (!password) {
      document.getElementById('passwordError').textContent = 'Password is required';
      hasError = true;
    }

    // If no errors, submit the form
    if (!hasError) {
      alert('Form submitted successfully!');
      // You can handle the form submission here, e.g., sending data to the server
    }
  });




  document.getElementById('checkbox').onchange = function(e){
    const password = document.getElementById('password');
    password.type = e.target.checked ? 'text' : 'password';
    setTimeout(() => password.type = 'password', 500);
  }

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    logIn();
  });
  
  

  
     // Function to validate email format
     function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Function to validate password
  function isValidPassword(password) {
      return password.length >= 8;
  }

  // Function to handle sign-in
  function logIn() {
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const passwordError = document.getElementById('passwordError');

      if (!email || !password || !lastName || !firstName) {
          passwordError.textContent = 'Enter the fields';
          return;
      }

      if (!isValidEmail(email)) {
          passwordError.textContent = 'Invalid email address';
          return;
      }

      if (!isValidPassword(password)) {
          passwordError.textContent = 'Password must be at least 8 characters long';
          return;
        }

        passwordError.textContent = 'Logging in...';
        passwordError.style.color = '#ecd3d32b';

        // Send login request to the server
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password,firstName,lastName})
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.open('/pages/spectronet/spectronet.html', "_self");
            } else {    
              passwordError.textContent = data.message;
              passwordError.style.color = 'red';
          }
      })
      .catch(error => {
        alert(error)
          passwordError.textContent = 'An error occurred. Please try again.';
          passwordError.style.color = 'red';
      });
  }	