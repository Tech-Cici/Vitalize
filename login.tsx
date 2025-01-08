import React, { useState } from 'react';
import '../src/loginform.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Here you would typically make an API call to authenticate the user
    console.log('Login attempt with:', { email, password });
    // For demo purposes, let's simulate a successful login
    alert('Login successful!');
  };

  return (
    <body>
    <div className="login-container">
      <div className="login-form-container">
        <div className="text-center">
          <h2 className="login-title">Welcome back to VITALIZE</h2>
         
           
            <h6 className='login-subtitle'>
              Your AI assistance
            </h6>
         
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div className="error-message" role="alert">
              <span>{error}</span>
            </div>
          )}
          <div className="input-group">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-field input-field-top"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-field input-field-bottom"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-between">
            <div className="flex-items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="checkbox"
              />
              <label htmlFor="remember-me" className="checkbox-label">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="login-link">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="submit-button"
            >
              Sign in
            </button>
          </div>
          <div>
            <p>
                
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="submit-button1"
              
            >
              Create new account
            </button>
          </div>
        </form>
      </div>
    </div>
    </body>
  );
};

export default LoginForm;

