import React, { useRef, useState } from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import CreateNewPost from "./components/CreateNewPost.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Some title 1", description: "Some description 1" },
    { id: 2, title: "Some title 3", description: "Some description 2" },
    { id: 3, title: "Some title 2", description: "Some description 3" },
    { id: 4, title: "Some title 5", description: "Some description 4" },
    { id: 5, title: "Some title 4", description: "Some description 5" },
    { id: 6, title: "Some title 6", description: "Some description 6" },
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  function getSoretedPost (){
    console.log('Функция работает');
    if(selectedSort){
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    
    return posts
  }

  const sortedPosts = getSoretedPost();

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  function sortPost(sort){
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <CreateNewPost create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput 
          value = {searchQuery}
          placeholder = "Поиск..."
          onChange={e =>setSearchQuery(e.target.value)}
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPost}
          options = {[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
          ]}
          defaultValue='Сортировка'
        />
      </div>
      {/**Условная отрисовка */}
      {posts.length !== 0
        ?
        <PostList deletePost={deletePost} posts={sortedPosts} title={'The posts list 1'} />
        :
        <div style={{
          fontSize: '25px',
          color: 'red',
          textAlign: 'center',
          marginTop: '20px',
          border: '1px solid red'
        }}>Посты не найдены!
        </div>
      }

    </div>
  );
}

export default App;
