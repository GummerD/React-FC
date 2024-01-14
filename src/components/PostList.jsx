import React from "react";
import PostItem from './PostItem';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const PostList = function ({ posts, title, deletePost }) {
  if (!posts.length) {
    return <div style={{
      fontSize: '25px',
      color: 'red',
      textAlign: 'center',
      marginTop: '20px',
      border: '1px solid red'
    }}>Посты не найдены!
    </div>
  }

  //console.log(posts);
  return (
    <div>
      <h1 >{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem deletePost={deletePost} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default PostList;