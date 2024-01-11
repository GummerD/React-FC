import React from "react";
import PostItem from './PostItem'

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
      {posts.map((post, index) =>
        <PostItem deletePost={deletePost} number={index + 1} post={post} key={post.id} />
      )}
    </div>
  )
}

export default PostList;