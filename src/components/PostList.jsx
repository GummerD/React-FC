import React from "react";
import PostItem from './PostItem'

const PostList = function ({ posts, title, deletePost }) {
  //console.log(posts);
  return (
    <div>
      <h1 >{title}</h1>
      {posts.map((post, index) =>
        <PostItem deletePost={deletePost} number = {index+1} post={post} key={post.id} />
      )}
    </div>
  )
}

export default PostList;