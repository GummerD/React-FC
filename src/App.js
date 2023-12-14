import React, { useRef, useState } from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Some title 1", description: "Some description 1" },
    { id: 2, title: "Some title 2", description: "Some description 2" },
    { id: 3, title: "Some title 3", description: "Some description 3" },
    { id: 4, title: "Some title 4", description: "Some description 4" },
    { id: 5, title: "Some title 5", description: "Some description 5" },
    { id: 6, title: "Some title 6", description: "Some description 6" },
  ]);

  const [posts_2, setPosts_2] = useState([
    { id: 1, title: "Some title 1", description: "Some description 1" },
    { id: 2, title: "Some title 2", description: "Some description 2" },
    { id: 3, title: "Some title 3", description: "Some description 3" },
    { id: 4, title: "Some title 4", description: "Some description 4" },
    { id: 5, title: "Some title 5", description: "Some description 5" },
    { id: 6, title: "Some title 6", description: "Some description 6" },
  ]);

  const [title, setTitle] = useState('');
  const [description, setBody] = useState('');

  function addNewPost(event) {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      description
    };

    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  }
  

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={description}
          onChange={event => setBody(event.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'The posts list 1'} />
      <PostList posts={posts_2} title={'The posts list 2'} />
    </div>
  );
}

export default App;
