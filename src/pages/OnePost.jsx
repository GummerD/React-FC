import React, { useEffect, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import useFetching from '../hooks/useFetching';
import PostService from '../API/PostService';
import MyLoader from '../components/UI/Loader/MyLoader';

export default function OnePost() {

  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setCommets] = useState([]);

  console.log(comments);

  const [fetchPostById, isLoadingPosts, errorPosts] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setCommets(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, [])

  return (
    <div style={{ margin: `10% 30%` }}>
      <h1> Cтраница с поcтом ID = {params.id} </h1>
      {
        isLoadingPosts
          ? <MyLoader />
          : <div style={{ marginTop: '15px' }}>
            {post.id}. {post.title}
          </div>

      }
      <h2 style={{ marginTop: '15px' }}>Комментарии</h2>
      {isLoadingComments
        ? <MyLoader />
        : <div>
          {comments.map(comment =>
            <div key={comment.id} style={{ marginTop: '15px' }}>
              <h3>комментарий номер: {comment.id}</h3>
              <p> эл.почта пользовтеля: {comment.email}</p>
              <p style={{border: 'solid 1px green', marginTop: '15px'}}> Текст комментария: {comment.body}</p>
            </div>
          )}
        </div>
      }

    </div>
  )
}
