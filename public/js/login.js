var loginFormHandler = async (info) => {
  info.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("do redirect")
      document.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  }
};

var signupFormHandler = async (info) => {
  info.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/home');
    } else {
      console.log(response.statusText);
    }
  }
};

$('.login-btn').on('click', loginFormHandler);
$('.signup-btn').on('click', signupFormHandler);