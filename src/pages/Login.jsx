import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const hendleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, {replace: true}));
  }
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={hendleSubmit}>
          <label >
            Name: <input name="username" />
          </label>
          <button type='submit'>Signin</button>
      </form>
    </div>
  )
}
