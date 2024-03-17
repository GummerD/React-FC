import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/'
  return (
    <div>
        <h1>Login page</h1>  
        {fromPage}
    </div>
  )
}
