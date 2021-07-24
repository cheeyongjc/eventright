import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const demo = () => {
    const demo = 'demo';
    const password = 'password'
    return dispatch(sessionActions.login({ 'credential': demo, 'password': password }))
      .catch(async (response) => {
        const data = await response.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className='login-submit'>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <img className='logoImage' src='https://photodumpeventsright.s3.us-east-2.amazonaws.com/large.png' alt='logo' />
      <label className='login-label'>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder='Username or Email'
        />
      </label>
      <label className='login-label'>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </label>
      <button type="submit" className='loginsubmit'>Log In</button>
      <button type="submit" className='demosubmit' onClick={demo}>Demo</button>
    </form>
  );
}

export default LoginForm;
