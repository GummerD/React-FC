import React, { useMemo, useRef, useState } from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import CreateNewPost from "./components/CreateNewPost.jsx";

import PostsFilter from "./components/PostsFilter.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Some title 1", description: "Some description 1" },
    { id: 2, title: "Some title 3", description: "Some description 2" },
    { id: 3, title: "Some title 2", description: "Some description 3" },
    { id: 4, title: "Some title 5", description: "Some description 4" },
    { id: 5, title: "Some title 4", description: "Some description 5" },
    { id: 6, title: "Some title 6", description: "Some description 6" },
  ]);

  const [filter, setFilter] = useState({sort: '', query:''});

  const sortedPosts = useMemo(()=>{
    console.log('Функция работает');
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    } 
    return posts
  }, [posts, filter.sort]);

  const soretedAndSearchPosts = useMemo(() =>{
    return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query]);

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <CreateNewPost create={createPost} />

      <hr style={{ margin: "15px 0" }} />

      <PostsFilter 
        filter={filter}
        setFilter={setFilter} 
      />

      <PostList 
        deletePost={deletePost} 
        posts={soretedAndSearchPosts} 
        title={'The posts list 1'} 
      />
      
    </div>
  );
}

export default App;
