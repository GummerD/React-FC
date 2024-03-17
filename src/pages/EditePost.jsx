import React from 'react';
import { useParams } from 'react-router-dom';

export default function EditePost() {
    const params = useParams();

    return (
        <div>
            <h1> Страницы для изменения поста c id = {params.id} </h1>
        </div>
    )
}
