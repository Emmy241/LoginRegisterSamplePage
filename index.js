// document.getElementById("login-form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const username = document.getElementById("exampleInputEmail1").value;
//     const password = document.getElementById("exampleInputPassword").value;

//     // Check if username and password are valid
//   if (username === 'admin@gmail.com' && password === 'password') {
//     // Successful login
//     alert('Login Successful');
//   } else {
//     // Invalid login
//     alert('Invalid username or password');
//   }

// })





function getLogin() {

    const username = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword").value;

    if (username === 'admin@gmail.com' && password === 'password') {
        // Successful login
        alert('Login Successful');
      } else {
        // Invalid login
        alert('Invalid username or password');
      }

}

function getReg() {

    const name = document.getElementById('exampleInputName').value;
    const email = document.getElementById('exampleInputEmail').value;
    const password = document.getElementById('exampleInputPassword').value;
    const confirmPassword = document.getElementById('exampleInputPassword1').value;
  

     // Check if all fields are filled
  if (name && email && password && confirmPassword) {
    // Check if passwords match
    if (password === confirmPassword) {
      // Successful registration
      alert('Registration Successful');
      // Reset the form
      document.getElementById('reg-form').reset();
    } else {
      // Passwords don't match
      alert('Passwords do not match');
    }
  } else {
    // Missing fields
    alert('Please fill in all fields');
  }

}


//     // Check if username and password are valid
//   if (username === 'admin@gmail.com' && password === 'password') {
//     // Successful login
//     alert('Login Successful');
//   } else {
//     // Invalid login
//     alert('Invalid username or password');
//   }