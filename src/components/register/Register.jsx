import React, { useState, useEffect } from "react";
import "./Register.css";


const Register = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);

  const CLIENT_ID = '37422384939-2d3r237achmdifp8hujd120h0bthbrr4.apps.googleusercontent.com';
  const BASE_URL = "https://api.ignus.co.in/";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get('Error');
    if (errorParam) {
      setError(errorParam);
      setTimeout(() => setError(null), 5000);
    }
  }, []);

  const handleGoogleLogin = (isSignUp) => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const redirectUri = isSignUp ? 'api/accounts/register/google/' : 'api/accounts/login/google/';
    const scope = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');

    const params = {
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: BASE_URL + redirectUri,
      prompt: 'select_account',
      access_type: 'online',
      scope
    };

    const urlParams = new URLSearchParams(params).toString();
    window.location = `${googleAuthUrl}?${urlParams}`;
  };

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (e, isSignUp) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (isSignUp) {
      const firstName = form.firstName.value;
      const lastName = form.lastName.value;
      const confirmPassword = form.confirmPassword.value;

      if (email.endsWith("iitj.ac.in")) {
        setError("IITJ Users can only use Google Sign up");
        setTimeout(() => setError(null), 5000);
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        setTimeout(() => setError(null), 5000);
        return;
      }

      fetch(BASE_URL + 'api/accounts/register/', {
        method: 'POST',
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        }),
        credentials: 'include',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(response => {
        if (response.status === 200) {
          window.location.replace("complete-profile/index.html");
        }
        return response.json();
      })
      .then(data => {
        if (data.Error) {
          setError(data.Error);
          setTimeout(() => setError(null), 5000);
        }
      })
      .catch(error => console.error('Error:', error));
    } else {
      fetch(BASE_URL + 'api/accounts/login/', {
        method: 'POST',
        body: JSON.stringify({
          username: email,
          password: password,
        }),
        credentials: 'include',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      .then(response => {
        if (response.status === 200) {
          if (getCookie("isProfileComplete") === "True") {
            window.location.replace("index.html");
          } else {
            window.location.replace("complete-profile/index.html");
          }
        }
        return response.json();
      })
      .then(data => {
        if (data.Error) {
          setError(data.Error);
          setTimeout(() => setError(null), 5000);
        }
      })
      .catch(error => console.error('Error:', error));
    }
  };

  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const togglePasswordVisibility = (id) => {
    const input = document.getElementById(id);
    if (input.type === 'password') {
      input.type = 'text';
      // add class to show eye-slash icon
      input.nextElementSibling.classList.add('fa-eye-slash');
      input.nextElementSibling.classList.remove('fa-eye');
    } else {
      input.type = 'password';
      // add class to show eye icon
      input.nextElementSibling.classList.add('fa-eye');
      input.nextElementSibling.classList.remove('fa-eye-slash');
    }
  };

  const matchPassword = () => {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
    if (password === confirmPassword) {
      message.style.color = 'green';
      message.innerHTML = 'Passwords match';
    } else {
      message.style.color = 'red';
      message.innerHTML = 'Passwords do not match';
    }
  };

  return (
    <div className="login-container">
      {error && <div id="snackbar" className="show">{error}</div>}
      <div className={`content-container ${isRegistering ? "right-panel-active" : ""}`}>
        <div className={`form-section sign-up-container ${isRegistering ? "active" : ""}`}>
          <div className="register-form">
            <h2>Create Account</h2>
            <form onSubmit={(e) => handleSubmit(e, true)}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password1" name="password" placeholder="Enter your password" required onInput={matchPassword} />
                <i className="fa fa-eye toggle-password" onClick={() => togglePasswordVisibility('password1')}></i>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required onInput={matchPassword} />
                <i className="fa fa-eye toggle-password" onClick={() => togglePasswordVisibility('confirmPassword')}></i>
                <span id="message" className="password-message"></span>
              </div>
              <button type="submit" className="action-button">Sign Up</button>
            </form>
            <button className="google-button" onClick={() => handleGoogleLogin(true)}>Sign Up with Google</button>
             {/* <p>Already have an account? <button onClick={handleToggle} className="toggle-button">Login</button></p> */}
          </div>
        </div>
        <div className={`form-section sign-in-container ${!isRegistering ? "active" : ""}`}>
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={(e) => handleSubmit(e, false)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required />
                <i className="fa fa-eye toggle-password" onClick={() => togglePasswordVisibility('password')}></i>
              </div>
              <button type="submit" className="action-button">Login</button>
            </form>
            <button className="google-button" onClick={() => handleGoogleLogin(false)}>Login with Google</button>
            {/* <p>Don't have an account? <button onClick={handleToggle} className="toggle-button">Sign Up</button></p> */}
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h2>Welcome Back!</h2>
              <button className="ghost" onClick={handleToggle}>Login</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h2>Hello there.</h2>
              <p>Join the Ignus Family today!</p>
              <button className="ghost" onClick={handleToggle}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
