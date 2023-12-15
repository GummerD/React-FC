import React, { useRef, useState } from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import CreateNewPost from "./components/CreateNewPost.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Some title 1", description: "Some description 1" },
    { id: 2, title: "Some title 2", description: "Some description 2" },
    { id: 3, title: "Some title 3", description: "Some description 3" },
    { id: 4, title: "Some title 4", description: "Some description 4" },
    { id: 5, title: "Some title 5", description: "Some description 5" },
    { id: 6, title: "Some title 6", description: "Some description 6" },
  ]);

  function createPost(newPost){
    setPosts([...posts, newPost])
  }

  function deletePost(post){
    setPosts(posts.filter(p=>p.id !== post.id))
  }


  return (
    <div className="App">
      <CreateNewPost create = {createPost}/>
      {/**Условная отрисовка */}
      { posts.length !== 0 
        ?
        <PostList deletePost ={deletePost} posts={posts} title={'The posts list 1'} />
        :
        <div style={{
          fontSize: '25px',
          color: 'red', 
          textAlign: 'center', 
          marginTop: '20px',
          border: '1px solid red'}}>Посты не найдены!
        </div>
      }
      
    </div>
  );
}

export default App;
