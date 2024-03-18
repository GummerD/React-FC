import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function EditePost() {
    const params = useParams();
    const {signout} = useAuth();
    const navigate = useNavigate();

    function exitLogin(){
        signout( () => navigate('/posts',{replace: true}))
    }

    return (
        <div>
            <h1> Страницы для изменения поста c id = {params.id} </h1>
            <button onClick={exitLogin}>Signout</button>
        </div>
    )
}
