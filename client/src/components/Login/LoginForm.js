import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLoginClick,
}) {
  return (
    <form>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control form-control-danger"
          placeholder="Enter your email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <hr />
      <button className="btn btn-success btn-block" onClick={onLoginClick}>
        Sign in
      </button>
      <hr />
      Need an account? <Link to="/register">Click here to create one.</Link>
    </form>
  );
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

export default LoginForm;
