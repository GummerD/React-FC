import React, {useEffect, useState} from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import CreateNewPost from "./components/CreateNewPost.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import usePosts from "./hooks/usePosts.js"
import PostsFilter from "./components/PostsFilter.jsx";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visibleModale, setVisibleModal] = useState(false)

  const soretedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(()=>{
    fetchPost();
    console.log('Use Effect');
  }, [filter]);

  async function fetchPost(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
    console.log(response.data);
  }

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setVisibleModal(false)
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <button onClick={fetchPost}>Запрос</button>

      <MyButton
        style = {{marginTop: '30px'}}
        onClick={() => setVisibleModal(true)}
      >
          Создать новый пост
      </MyButton>

      <MyModal
        visible = {visibleModale}
        setVisible={setVisibleModal}
        >
        <CreateNewPost create={createPost}/>
      </MyModal>

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
